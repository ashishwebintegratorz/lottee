'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export default function TripleHoverEffect({
    image1,
    image2,
    image3,
    displacementImage,
    intensity = 0.1,
    speedIn = 1.2,
    speedOut = 1.0,
    className = "",
    angle = Math.PI / 4,
    isHovered = null
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

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(parent.offsetWidth, parent.offsetHeight);
        parent.appendChild(renderer.domElement);

        const render = () => {
            renderer.render(scene, camera);
        };

        const loader = new THREE.TextureLoader();
        loader.crossOrigin = "";

        const disp = loader.load(displacementImage, render);
        disp.wrapS = disp.wrapT = THREE.RepeatWrapping;

        const tex1 = loader.load(image1, (texture) => {
            texture.magFilter = texture.minFilter = THREE.LinearFilter;
            render();
        });
        const tex2 = loader.load(image2, (texture) => {
            texture.magFilter = texture.minFilter = THREE.LinearFilter;
            render();
        });
        const tex3 = loader.load(image3, (texture) => {
            texture.magFilter = texture.minFilter = THREE.LinearFilter;
            render();
        });

        const material = new THREE.ShaderMaterial({
            uniforms: {
                intensity1: { type: "f", value: intensity },
                intensity2: { type: "f", value: intensity },
                dispFactor: { type: "f", value: 0 },
                angle1: { type: "f", value: angle },
                angle2: { type: "f", value: -angle * 3 },
                texture1: { type: "t", value: tex1 },
                texture2: { type: "t", value: tex2 },
                texture3: { type: "t", value: tex3 },
                disp: { type: "t", value: disp },
                res: { type: "vec2", value: new THREE.Vector2(parent.offsetWidth, parent.offsetHeight) }
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
                uniform sampler2D texture3;
                uniform float angle1;
                uniform float angle2;
                uniform float intensity1;
                uniform float intensity2;
                uniform vec2 res;

                mat2 getRotM(float angle) {
                    float s = sin(angle);
                    float c = cos(angle);
                    return mat2(c, -s, s, c);
                }

                void main() {
                    vec4 disp = texture2D(disp, vUv);
                    vec2 dispVec = vec2(disp.r, disp.g);
                    
                    // Cleaner mapping for background split
                    vec2 uvLeft = vec2(vUv.x * 2.0, vUv.y);
                    vec2 uvRight = vec2((vUv.x - 0.5) * 2.0, vUv.y);

                    // Distort texture3 for the reveal
                    vec2 distortedPositionHover = vUv + getRotM(angle1) * dispVec * intensity1 * (1.0 - dispFactor);
                    
                    vec4 _texture1 = texture2D(texture1, uvLeft);
                    vec4 _texture2 = texture2D(texture2, uvRight);
                    vec4 _texture3 = texture2D(texture3, distortedPositionHover);
                    
                    vec4 baseColor = vUv.x < 0.5 ? _texture1 : _texture2;
                    
                    gl_FragColor = mix(baseColor, _texture3, dispFactor);
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

            mesh.geometry.dispose();
            mesh.geometry = new THREE.PlaneGeometry(parent.offsetWidth, parent.offsetHeight, 1);
            material.uniforms.res.value.set(parent.offsetWidth, parent.offsetHeight);
            render();
        };

        window.addEventListener("resize", onResize);

        return () => {
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
            tex3.dispose();
            disp.dispose();
            renderer.dispose();
        };
    }, [image1, image2, image3, displacementImage, intensity, speedIn, speedOut, angle]);

    useEffect(() => {
        if (isHovered !== null && materialRef.current) {
            gsap.to(materialRef.current.uniforms.dispFactor, {
                duration: isHovered ? speedIn : speedOut,
                value: isHovered ? 1 : 0,
                ease: "expo.out"
            });
        }
    }, [isHovered, speedIn, speedOut]);

    return <div ref={containerRef} className={`w-full h-full cursor-pointer ${className}`} />;
}
