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
            src: '/urben2.jpeg',
            alt: 'Studio session',
            title: 'Studio session',
            category: 'Performance',
            span: 'col-span-1 row-span-1',
            mobileAspect: 'aspect-[2/3]'
        },
        {
            type: 'image',
            src: '/IMG_3006 New (3).jpg',
            alt: 'Artistic details',
            title: 'Artistic details',
            category: 'Experimental',
            span: 'col-span-1 row-span-1',
            mobileAspect: 'aspect-[3/4]'
        },
        {
            type: 'image',
            src: '/gallery2.jpeg',
            alt: 'Portrait',
            title: 'Portrait of a Girl',
            category: 'Art of Photography',
            span: 'col-span-1 row-span-2',
            mobileAspect: 'aspect-[2/3]'
        },
        {
            type: 'image',
            src: '/gallery99.JPG',
            alt: 'Abstract texture',
            title: 'Modern Abstract',
            category: 'Experimental',
            span: 'col-span-1 row-span-1',
            mobileAspect: 'aspect-[2/3]'
        },
        {
            type: 'image',
            src: '/gallery202.jpg',
            alt: 'Studio movement',
            title: 'Physical Language',
            category: 'Movement',
            span: 'col-span-1 row-span-1',
            mobileAspect: 'aspect-[3/4]'
        },
        {
            type: 'image',
            src: '/gallery.jpg',
            alt: 'Urban shot',
            title: 'Urban Silhouette',
            category: 'Architecture',
            span: 'col-span-1 row-span-1',
            mobileAspect: 'aspect-[3/4]'
        },
        {
            type: 'image',
            src: '/imggl1.jpeg',
            alt: 'Performance space',
            title: 'Stage Presence',
            category: 'Dance',
            span: 'col-span-1 row-span-1',
            mobileAspect: 'aspect-[2/3]'
        }
    ];

    return (
        <section className="bg-transparent py-32 px-0 relative">
            <div className="max-w-[1600px] mx-auto relative">
                {/* Expo Header */}
                <div className="px-2 md:px-6 lg:px-12 mb-4 flex flex-col md:flex-row items-start md:items-end justify-between">
                    <h2
                        className="text-black"
                        style={{
                            fontFamily: "'Roc Grotesk', sans-serif",
                            fontSize: isMobile ? "24px" : "32px",
                            fontWeight: "700",
                            lineHeight: isMobile ? "32px" : "40px",
                            color: "rgb(0, 0, 0)",
                            fontStyle: "normal",
                            letterSpacing: "0.02em",
                            display: "inline-block"
                        }}
                    >
                        LOTTE AIMÉE
                    </h2>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-2 px-2 lg:px-12">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className={`w-full ${item.span} relative overflow-hidden bg-[#121212]`}
                            style={{
                                minHeight: isMobile ? '160px' : (item.span.includes('row-span-2') ? '500px' : '250px'),
                                height: '100%'
                            }}
                        >
                            <div className={`${isMobile ? (item.mobileAspect || 'aspect-square') : 'md:h-full'} w-full h-full relative`}>
                                {item.type === 'image' ? (
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className={`w-full h-full ${item.fit === 'contain' ? 'object-contain' : 'object-cover'} ${item.position || 'object-center'}`}
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
