'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export default function HoverEffect({
    image1,
    image2,
    displacementImage,
    intensity = 0.1,
    speedIn = 1.6,
    speedOut = 1.2,
    className = "",
    angle = Math.PI / 4,
    isHovered = null
}) {
    const containerRef = useRef();
    const materialRef = useRef();

    useEffect(() => {
        if (!containerRef.current) return;

        const parent = containerRef.current;
        const w = parent.offsetWidth;
        const h = parent.offsetHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(
            w / -2, w / 2, h / 2, h / -2, 1, 1000
        );
        camera.position.z = 1;

        const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0xffffff, 0);
        renderer.setSize(w, h);

        // Make canvas fill container absolutely
        const canvas = renderer.domElement;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        parent.appendChild(canvas);

        const render = () => renderer.render(scene, camera);

        let frameId;
        const animate = () => {
            render();
            frameId = requestAnimationFrame(animate);
        };
        animate();

        const loader = new THREE.TextureLoader();
        loader.crossOrigin = "";

        // Helper: compute UV scale for "cover" behavior
        const getCoverUV = (texW, texH, containerW, containerH) => {
            const texAspect = texW / texH;
            const containerAspect = containerW / containerH;
            let scaleX = 1, scaleY = 1, offsetX = 0, offsetY = 0;
            if (texAspect > containerAspect) {
                // texture is wider — scale by height, crop sides
                scaleX = containerAspect / texAspect;
                offsetX = (1 - scaleX) / 2;
            } else {
                // texture is taller — scale by width, crop top/bottom
                scaleY = texAspect / containerAspect;
                offsetY = (1 - scaleY) / 2;
            }
            return { scaleX, scaleY, offsetX, offsetY };
        };

        const applyCover = (tex) => {
            if (!tex.image) return;
            const { scaleX, scaleY, offsetX, offsetY } = getCoverUV(
                tex.image.width, tex.image.height,
                parent.offsetWidth, parent.offsetHeight
            );
            tex.repeat.set(scaleX, scaleY);
            tex.offset.set(offsetX, offsetY);
            tex.needsUpdate = true;
        };

        const disp = loader.load(displacementImage, render);
        disp.wrapS = disp.wrapT = THREE.RepeatWrapping;

        const tex1 = loader.load(image1, (t) => { applyCover(t); render(); });
        const tex2 = loader.load(image2, (t) => { applyCover(t); render(); });

        tex1.magFilter = tex2.magFilter = THREE.LinearFilter;
        tex1.minFilter = tex2.minFilter = THREE.LinearFilter;

        const material = new THREE.ShaderMaterial({
            uniforms: {
                intensity1: { value: intensity },
                intensity2: { value: intensity },
                dispFactor: { value: 0.0 },
                angle1: { value: angle },
                angle2: { value: -angle * 3 },
                texture1: { value: tex1 },
                texture2: { value: tex2 },
                disp: { value: disp }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec2 vUv;
                uniform float dispFactor;
                uniform sampler2D disp;
                uniform sampler2D texture1;
                uniform sampler2D texture2;
                uniform float angle1;
                uniform float angle2;
                uniform float intensity1;
                uniform float intensity2;

                mat2 getRotM(float angle) {
                    float s = sin(angle);
                    float c = cos(angle);
                    return mat2(c, -s, s, c);
                }

                void main() {
                    vec4 dispTex = texture2D(disp, vUv);
                    vec2 dispVec = vec2(dispTex.r, dispTex.g);
                    vec2 distortedPosition1 = vUv + getRotM(angle1) * dispVec * intensity1 * dispFactor;
                    vec2 distortedPosition2 = vUv + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);
                    vec4 _texture1 = texture2D(texture1, distortedPosition1);
                    vec4 _texture2 = texture2D(texture2, distortedPosition2);
                    gl_FragColor = mix(_texture1, _texture2, dispFactor);
                }
            `,
            transparent: true,
            opacity: 1
        });

        materialRef.current = material;

        const geometry = new THREE.PlaneGeometry(w, h, 1);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const onMouseEnter = () => {
            if (isHovered !== null) return;
            gsap.to(material.uniforms.dispFactor, {
                duration: speedIn, value: 1, ease: "expo.out",
                onUpdate: render, onComplete: render
            });
        };

        const onMouseLeave = () => {
            if (isHovered !== null) return;
            gsap.to(material.uniforms.dispFactor, {
                duration: speedOut, value: 0, ease: "expo.out",
                onUpdate: render, onComplete: render
            });
        };

        parent.addEventListener("mouseenter", onMouseEnter);
        parent.addEventListener("touchstart", onMouseEnter);
        parent.addEventListener("mouseleave", onMouseLeave);
        parent.addEventListener("touchend", onMouseLeave);

        const onResize = () => {
            const nw = parent.offsetWidth;
            const nh = parent.offsetHeight;
            renderer.setSize(nw, nh);
            camera.left = nw / -2;
            camera.right = nw / 2;
            camera.top = nh / 2;
            camera.bottom = nh / -2;
            camera.updateProjectionMatrix();
            mesh.geometry.dispose();
            mesh.geometry = new THREE.PlaneGeometry(nw, nh, 1);
            // Re-apply cover on resize
            applyCover(tex1);
            applyCover(tex2);
            render();
        };

        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(frameId);
            parent.removeEventListener("mouseenter", onMouseEnter);
            parent.removeEventListener("touchstart", onMouseEnter);
            parent.removeEventListener("mouseleave", onMouseLeave);
            parent.removeEventListener("touchend", onMouseLeave);
            window.removeEventListener("resize", onResize);
            if (parent.contains(canvas)) parent.removeChild(canvas);
            geometry.dispose();
            material.dispose();
            tex1.dispose();
            tex2.dispose();
            disp.dispose();
            renderer.dispose();
        };
    }, [image1, image2, displacementImage, intensity, speedIn, speedOut, angle, isHovered]);

    useEffect(() => {
        if (isHovered !== null && materialRef.current) {
            gsap.to(materialRef.current.uniforms.dispFactor, {
                duration: isHovered ? speedIn : speedOut,
                value: isHovered ? 1 : 0,
                ease: "expo.out"
            });
        }
    }, [isHovered, speedIn, speedOut]);

    return (
        <div
            ref={containerRef}
            className={`cursor-pointer ${className}`}
            style={{ position: 'relative', width: '100%', height: '100%' }}
        />
    );
}