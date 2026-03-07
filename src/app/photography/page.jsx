'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const photographyItems = [
    {
        id: 1,
        title: 'Visual Poetry',
        category: 'Dance Photography',
        image: '/IMG_3004 New (1).jpg',
        span: 'md:col-span-2'
    },
    {
        id: 2,
        title: 'Silent Motion',
        category: 'Studio Study',
        image: '/IMG_3005 New (2).jpg',
        span: 'md:col-span-1'
    },
    {
        id: 3,
        title: 'Urban Rhythm',
        category: 'Atmospheric',
        image: '/_MIV8630.JPG',
        span: 'md:col-span-1'
    },
    {
        id: 4,
        title: 'Ethereal Light',
        category: 'Experimental',
        image: '/IMG_3006 New (3).jpg',
        span: 'md:col-span-2'
    },
    {
        id: 5,
        title: 'The Performance',
        category: 'Stage Presence',
        image: '/gallerie1 New.jpg',
        span: 'md:col-span-1'
    },
    {
        id: 6,
        title: 'Human Form',
        category: 'Portraiture',
        image: '/Lotte_AlexConu_112.jpg',
        span: 'md:col-span-1'
    },
    {
        id: 7,
        title: 'Captured Essence',
        category: 'Fine Art',
        image: '/IMG_3753.JPG',
        span: 'md:col-span-1'
    },
    {
        id: 8,
        title: 'Kinetic Stillness',
        category: 'Experimental',
        image: '/IMG_3754.JPG',
        span: 'md:col-span-1'
    },
    {
        id: 9,
        title: 'The Narrative',
        category: 'Storytelling',
        image: '/travelling.jpg',
        span: 'md:col-span-2'
    },
    {
        id: 10,
        title: 'Shadow Dance',
        category: 'Study',
        image: '/IMG_3750.JPG',
        span: 'md:col-span-1'
    },
];

export default function PhotographyPage() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <main className="min-h-screen bg-[#1a1a1a] pt-40 pb-24 px-6 lg:px-12">
            <div className="max-w-[1500px] mx-auto">
                {/* Header Section */}
                <header className="mb-24 flex flex-col items-start max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <span className="h-[1px] w-12 bg-white/40"></span>
                        <span className="text-xs font-bold tracking-[0.4em] text-white/50 uppercase">
                            Photography & Visual Arts
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-white text-[clamp(2.5rem,8vw,6rem)] leading-[1.1] font-bold tracking-tight mb-10"
                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                    >
                        Witnessing the <br />Silent Movement.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-white/60 text-lg md:text-xl leading-relaxed font-light max-w-3xl"
                        style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                    >
                        For Lotte Aimee, photography is a natural extension of choreographic practice. Through her lens, she seeks the same emotional intensity and physical precision that defines her performances. Each image is a frozen moment of storytelling, where light and shadow perform their own silent dance.
                    </motion.p>
                </header>

                {/* True Masonry Column Layout - No Cropping */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {photographyItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="break-inside-avoid group relative overflow-hidden bg-gray-50 cursor-pointer mb-8 rounded-sm"
                        >
                            {/* Overlay for aesthetic */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700 z-10"></div>

                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-[1.02]"
                            />

                            {/* Hover Details */}
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="w-6 h-[1px] bg-white/60"></span>
                                        <span className="text-white/80 text-[9px] font-bold tracking-[0.2em] uppercase">
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3
                                        className="text-white text-2xl font-bold tracking-tight"
                                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                    >
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-40 text-center py-20 border-t border-white/10"
                >
                    <h2
                        className="text-3xl md:text-5xl font-bold text-white mb-8"
                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                    >
                        Interested in Collaborative Work?
                    </h2>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-4 text-white font-bold text-xl group"
                    >
                        <span>Let's Talk</span>
                        <svg
                            width="40"
                            height="16"
                            viewBox="0 0 40 16"
                            fill="none"
                            className="transition-transform duration-300 group-hover:translate-x-3"
                        >
                            <path d="M0 8H38M38 8L31 1M38 8L31 15" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </main>
    );
}
