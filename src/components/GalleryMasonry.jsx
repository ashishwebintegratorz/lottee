'use client';

import { useState, useEffect } from 'react';

export default function GalleryMasonry() {
    const [playingVideo, setPlayingVideo] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const galleryItems = [
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
            alt: 'Water droplets',
            title: 'Water Droplets',
            category: 'Nature',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
            alt: 'Portrait',
            title: 'Portrait of a Girl',
            category: 'Art of Photography',
            span: 'col-span-1 row-span-2'
        },
        {
            type: 'image',
            src: '/WhatsApp Image 2026-02-15 at 18.08.48 (2).jpeg',
            alt: 'Abstract',
            title: 'Modern Abstract',
            category: 'Experimental',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'video',
            src: '/hero expo vedio.mp4',
            text: 'Play Clip',
            title: 'Cinematic Motion',
            category: 'Visual Arts',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop',
            alt: 'Moon',
            title: 'Lunar Surface',
            category: 'Astro',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=1000&auto=format&fit=crop',
            alt: 'Architecture',
            title: 'Urban Lines',
            category: 'Architecture',
            span: 'col-span-1 row-span-2'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1000&auto=format&fit=crop',
            alt: 'Birds',
            title: 'Flying High',
            category: 'Wildlife',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=1000&auto=format&fit=crop',
            alt: 'Gallery wall',
            title: 'Museum Walls',
            category: 'Exhibition',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: '/WhatsApp Image 2026-02-15 at 18.08.50.jpeg',
            alt: 'Abstract Texture',
            title: 'Deep Textures',
            category: 'Experimental',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: '/WhatsApp Image 2026-02-15 at 18.08.49 (2).jpeg',
            alt: 'Shadow Play',
            title: 'Contrasting Shadows',
            category: 'Photography',
            span: 'col-span-1 row-span-1'
        }
    ];

    return (
        <section className="bg-transparent py-32 px-0 relative">
            <div className="max-w-[1600px] mx-auto relative">
                {/* Expo Header */}
                <div className="px-6 lg:px-12 mb-20 md:mb-40 flex flex-col md:flex-row items-start md:items-end justify-between">
                    <h2
                        className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold text-black leading-tight md:leading-none mb-4 md:mb-0"
                        style={{
                            fontFamily: "'Roc Grotesk', sans-serif",
                            letterSpacing: "0.02em",
                            transform: isMobile ? "none" : "scaleY(1.3)",
                            transformOrigin: "bottom",
                            display: "inline-block"
                        }}
                    >
                        LOTTE & CIE.LA
                    </h2>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-1 px-6 lg:px-12">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className={`w-full ${item.span} md:block relative overflow-hidden group cursor-pointer bg-black`}
                            style={{
                                minHeight: isMobile ? '0' : (item.span.includes('row-span-2') ? '500px' : '250px'),
                                height: isMobile ? 'auto' : '100%'
                            }}
                        >
                            <div className="aspect-[3/2] md:h-full w-full relative">
                                {item.type === 'image' ? (
                                    <>
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
                                    </>
                                ) : (
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                )}
                            </div>

                            {/* Hover Overlay - Coming from bottom with border */}
                            <div className="absolute inset-0 p-4 transition-all duration-500 opacity-0 group-hover:opacity-100">
                                <div className="w-full h-full bg-[#121212] flex flex-col items-center justify-center text-center p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2 tracking-wide uppercase" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base italic" style={{ fontFamily: "Arial, sans-serif" }}>
                                        {item.category}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
