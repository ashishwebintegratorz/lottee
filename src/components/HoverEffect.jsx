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
    isHovered = null // New prop for external control
}) {
    const containerRef = useRef();
    const materialRef = useRef();

    useEffect(() => {
        if (!containerRef.current) return;

        const parent = containerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(
            parent.offsetWidth / -2,
            parent.offsetWidth / 2,
            parent.offsetHeight / 2,
            parent.offsetHeight / -2,
            1,
            1000
        );
        camera.position.z = 1;

        const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0xffffff, 0);
        renderer.setSize(parent.offsetWidth, parent.offsetHeight);
        const canvas = renderer.domElement;
        canvas.style.position = 'absolute';
        canvas.style.inset = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.objectFit = 'cover';
        parent.appendChild(canvas);

        const render = () => {
            renderer.render(scene, camera);
        };

        // Continuous animation loop for smooth GSAP transitions
        let frameId;
        const animate = () => {
            render();
            frameId = requestAnimationFrame(animate);
        };
        animate();

        const loader = new THREE.TextureLoader();
        loader.crossOrigin = "";

        const disp = loader.load(displacementImage, render);
        disp.wrapS = disp.wrapT = THREE.RepeatWrapping;

        const containerAspect = () => parent.offsetWidth / parent.offsetHeight;

        const tex1 = loader.load(image1, (t) => {
            if (t.image && t.image.width && t.image.height) {
                material.uniforms.containerAspect.value = containerAspect();
                material.uniforms.texture1Aspect.value = t.image.width / t.image.height;
                render();
            }
        });
        const tex2 = loader.load(image2, (t) => {
            if (t.image && t.image.width && t.image.height) {
                material.uniforms.containerAspect.value = containerAspect();
                material.uniforms.texture2Aspect.value = t.image.width / t.image.height;
                render();
            }
        });

        tex1.magFilter = tex2.magFilter = THREE.LinearFilter;
        tex1.minFilter = tex2.minFilter = THREE.LinearFilter;

        const material = new THREE.ShaderMaterial({
            uniforms: {
                intensity1: { type: "f", value: intensity },
                intensity2: { type: "f", value: intensity },
                dispFactor: { type: "f", value: 0 },
                angle1: { type: "f", value: angle },
                angle2: { type: "f", value: -angle * 3 },
                texture1: { type: "t", value: tex1 },
                texture2: { type: "t", value: tex2 },
                disp: { type: "t", value: disp },
                containerAspect: { type: "f", value: 1 },
                texture1Aspect: { type: "f", value: 1 },
                texture2Aspect: { type: "f", value: 1 }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
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
                uniform float containerAspect;
                uniform float texture1Aspect;
                uniform float texture2Aspect;

                mat2 getRotM(float angle) {
                    float s = sin(angle);
                    float c = cos(angle);
                    return mat2(c, -s, s, c);
                }

                vec2 coverUV(vec2 uv, float contAspect, float imgAspect) {
                    if (imgAspect > contAspect) {
                        float scale = contAspect / imgAspect;
                        return vec2((uv.x - 0.5) * scale + 0.5, uv.y);
                    } else {
                        float scale = imgAspect / contAspect;
                        return vec2(uv.x, (uv.y - 0.5) * scale + 0.5);
                    }
                }

                void main() {
                    vec4 disp = texture2D(disp, vUv);
                    vec2 dispVec = vec2(disp.r, disp.g);
                    vec2 distortedPosition1 = vUv + getRotM(angle1) * dispVec * intensity1 * dispFactor;
                    vec2 distortedPosition2 = vUv + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);
                    vec2 uv1 = coverUV(distortedPosition1, containerAspect, texture1Aspect);
                    vec2 uv2 = coverUV(distortedPosition2, containerAspect, texture2Aspect);
                    vec4 _texture1 = texture2D(texture1, uv1);
                    vec4 _texture2 = texture2D(texture2, uv2);
                    gl_FragColor = mix(_texture1, _texture2, dispFactor);
                }
            `,
            transparent: true,
            opacity: 1
        });

        materialRef.current = material;

        const geometry = new THREE.PlaneGeometry(parent.offsetWidth, parent.offsetHeight, 1);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const onMouseEnter = () => {
            if (isHovered !== null) return;
            gsap.to(material.uniforms.dispFactor, {
                duration: speedIn,
                value: 1,
                ease: "expo.out",
                onUpdate: render,
                onComplete: render
            });
        };

        const onMouseLeave = () => {
            if (isHovered !== null) return;
            gsap.to(material.uniforms.dispFactor, {
                duration: speedOut,
                value: 0,
                ease: "expo.out",
                onUpdate: render,
                onComplete: render
            });
        };

        parent.addEventListener("mouseenter", onMouseEnter);
        parent.addEventListener("touchstart", onMouseEnter);
        parent.addEventListener("mouseleave", onMouseLeave);
        parent.addEventListener("touchend", onMouseLeave);

        const onResize = () => {
            renderer.setSize(parent.offsetWidth, parent.offsetHeight);
            camera.left = parent.offsetWidth / -2;
            camera.right = parent.offsetWidth / 2;
            camera.top = parent.offsetHeight / 2;
            camera.bottom = parent.offsetHeight / -2;
            camera.updateProjectionMatrix();
            material.uniforms.containerAspect.value = parent.offsetWidth / parent.offsetHeight;
            mesh.geometry.dispose();
            mesh.geometry = new THREE.PlaneGeometry(parent.offsetWidth, parent.offsetHeight, 1);
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
            if (parent.contains(renderer.domElement)) {
                parent.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            tex1.dispose();
            tex2.dispose();
            disp.dispose();
            renderer.dispose();
        };
    }, [image1, image2, displacementImage, intensity, speedIn, speedOut, angle, isHovered]);

    // Handle external hover changes
    useEffect(() => {
        if (isHovered !== null && materialRef.current) {
            gsap.to(materialRef.current.uniforms.dispFactor, {
                duration: isHovered ? speedIn : speedOut,
                value: isHovered ? 1 : 0,
                ease: "expo.out"
            });
        }
    }, [isHovered, speedIn, speedOut]);

    return <div ref={containerRef} className={`relative w-full h-full cursor-pointer overflow-hidden ${className}`} />;
}
