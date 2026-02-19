'use client';

import { useState } from 'react';

export default function GalleryMasonry() {
    const [playingVideo, setPlayingVideo] = useState(null);

    const galleryItems = [
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
            alt: 'Water droplets',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
            alt: 'Portrait',
            span: 'col-span-1 row-span-2'
        },
        {
            type: 'image',
            src: '/WhatsApp Image 2026-02-15 at 18.08.48 (2).jpeg',
            alt: 'Abstract',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'video',
            src: '/hero expo vedio.mp4',
            text: 'Play Clip',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop',
            alt: 'Moon',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=1000&auto=format&fit=crop',
            alt: 'Architecture',
            span: 'col-span-1 row-span-2'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1000&auto=format&fit=crop',
            alt: 'Birds',
            span: 'col-span-1 row-span-1'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=1000&auto=format&fit=crop',
            alt: 'Gallery wall',
            span: 'col-span-1 row-span-1'
        }
    ];

    return (
        <section className="bg-transparent py-32 px-0 relative">
            <div className="max-w-[1600px] mx-auto relative">
                {/* Expo Header */}
                <div className="px-6 lg:px-12 mb-40 flex items-end justify-between">
                    <h2
                        className="text-[100px] font-bold text-black leading-none"
                        style={{
                            fontFamily: "'  sans-serif', Roc Grotesk",
                            letterSpacing: "0.05em",
                            transform: "scaleY(1.50)",
                            transformOrigin: "bottom",
                            display: "inline-block"
                        }}
                    >
                        LOTTE & CIE.LA
                    </h2>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 px-6 lg:px-12">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className={`${item.span} relative overflow-hidden group cursor-pointer bg-black`}
                            style={{ minHeight: item.span.includes('row-span-2') ? '500px' : '250px' }}
                        >
                            {item.type === 'image' ? (
                                <>
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
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
                    ))}
                </div>
            </div>
        </section>
    );
}
