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
            src: '/gallery1.jpeg',
            alt: 'Studio session',
            title: 'Studio session',
            category: 'Performance',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: '/IMG_3006 New (3).jpg',
            alt: 'Artistic details',
            title: 'Artistic details',
            category: 'Experimental',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: '/gallery2.jpeg',
            alt: 'Portrait',
            title: 'Portrait of a Girl',
            category: 'Art of Photography',
            span: 'col-span-1 row-span-2'
        },
        {
            type: 'image',
            src: '/gallery.3.jpeg',
            alt: 'Abstract texture',
            title: 'Modern Abstract',
            category: 'Experimental',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: '/WhatsApp Image 2026-02-15 at 18.08.48 (1).jpeg',
            alt: 'Performance space',
            title: 'Stage Presence',
            category: 'Dance',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: '/gallery4.jpeg',
            alt: 'Atmospheric shot',
            title: 'Light and Shadow',
            category: 'Atmosphere',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: '/gallerynew.jpeg',
            alt: 'Architecture',
            title: 'Urban Lines',
            category: 'Architecture',
            span: 'col-span-1 row-span-2'
        },
        {
            type: 'image',
            src: '/gallery6.jpeg',
            alt: 'Nature in motion',
            title: 'Movement',
            category: 'Art',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: '/WhatsApp Image 2026-02-15 at 18.08.49 (1).jpeg',
            alt: 'Behind the scenes',
            title: 'Process',
            category: 'Choreography',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: '/offer2.jpeg',
            alt: 'Gallery context',
            title: 'Exhibition',
            category: 'Space',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: '/offer3.jpeg',
            alt: 'Textured art',
            title: 'Deep Textures',
            category: 'Experimental',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: '/IMG_3005 New (2).jpg',
            alt: 'Contrast and light',
            title: 'Visual Study',
            category: 'Photography',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: '/IMG_3004 New (1).jpg',
            alt: 'Abstract composition',
            title: 'Composition',
            category: 'Art',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: '/WhatsApp Image 2026-02-15 at 18.08.49.jpeg',
            alt: 'Shadow and form',
            title: 'Contrast',
            category: 'Study',
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
                        LOTTE AIMÉE
                    </h2>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-1 px-1 lg:px-12">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className={`w-full ${item.span} relative overflow-hidden bg-[#121212]`}
                            style={{
                                minHeight: isMobile ? '160px' : (item.span.includes('row-span-2') ? '500px' : '250px'),
                                height: '100%'
                            }}
                        >
                            <div className={`${isMobile ? 'aspect-square' : 'md:h-full'} w-full h-full relative`}>
                                {item.type === 'image' ? (
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
