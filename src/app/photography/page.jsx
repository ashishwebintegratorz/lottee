'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const photographyItems = [
    {
        id: 1,
        title: 'The Quiet Body',
        category: 'Name of the shoot',
        image: '/photographyshoot1.jpeg',
        span: 'md:col-span-2',
        gallery: [
            '/photographyshoot2.jpeg',
            '/photographyshoot3.jpeg',
            '/photographyshoot4.jpeg',
            '/photographyshoot5.jpeg',
            '/photographyshoot6.jpeg',
            '/photographyshoot7.jpeg',
            '/photographyshoot8.jpeg',
            '/photographyshoot9.jpeg',
            '/photographyshoot1.jpeg'
        ]
    },
    {
        id: 2,
        title: 'Utsuroi',
        category: 'Name of the shoot',
        image: '/utsuroishootmain.jpeg',
        span: 'md:col-span-1',
        gallery: [
            '/utsurioshoot7.jpeg',
            '/gallery2.jpeg',
            '/urben2.jpeg',
            '/utsurioshoot3.jpg',
            '/aboutimg.jpeg',
            '/imggl1.jpeg',
            '/utsurioshoot4.jpeg',
            '/utsurioshoot5.jpeg',
            '/utsurioshoot6.jpeg'
        ]
    },
    {
        id: 3,
        title: 'Kinetic Form',
        category: 'Name of the shoot',
        image: '/gallery6.jpeg',
        gallery: [
            '/ioffer1.jpeg',
            '/offer2.jpeg',
            '/offer3.jpeg',
            '/offer4.jpeg',
            '/contact img.jpeg',
            '/gallery4.jpeg',
            '/gallery5.jpeg',
            '/gallery6.jpeg',
            '/gallery4.jpeg'
        ]
    },
    {
        id: 4,
        title: 'Soft Gravity',
        category: 'Name of the shoot',
        image: '/utsurioshoot5.jpeg',
        gallery: [
            '/softgravitymain.jpeg',
            '/utsurioshoot5.jpeg',
            '/utsurioshoot4.jpeg',
            '/utsurioshoot3.jpg',
            '/urben2.jpeg',
            '/utrshootl.jpg',
            '/imggl1.jpeg',
            '/utrshootl.jpg',
            '/softgravitymain.jpeg'
        ]
    },
    {
        id: 5,
        title: 'The Performance',
        category: 'Stage Presence',
        image: '/urben22.jpg',
        gallery: [
            '/gallerie1 New.jpg',
            '/gallery6.jpeg',
            '/offer4.jpeg',
            '/imggl1.jpeg',
            '/ioffer1.jpeg',
            '/WhatsApp Image 2026-03-07 at 15.02.11.jpeg',
            '/WhatsApp Image 2026-03-07 at 15.02.11 (1).jpeg',
            '/Lotte_AlexConu_112.jpg',
            '/Lotte_AlexConu_125.jpg'
        ]
    },
    /* {
         id: 6,
         title: 'Human Form',
         category: 'Portraiture',
         image: '/lastphoto.jpg',
         gallery: [
             '/Lotte_AlexConu_112.jpg',
             '/Lotte_AlexConu_125.jpg',
             '/WhatsApp Image 2026-02-15 at 18.08.48.jpeg',
             '/WhatsApp Image 2026-02-15 at 18.08.49.jpeg',
             '/WhatsApp Image 2026-02-15 at 18.08.47.jpeg',
             '/WhatsApp Image 2026-03-07 at 15.02.11 (1).jpeg',
             '/gallery1.jpeg',
             '/gallery2.jpeg',
             '/photographyshoot1.jpeg'
         ]
     }
         */
];

export default function PhotographyPage() {
    const [isMounted, setIsMounted] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <main className="min-h-screen bg-[#1a1a1a] pt-40 pb-24 px-6 lg:px-12">
            <div className="max-w-[1500px] mx-auto">
                {/* Centered Header Section */}
                <div className="text-center mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="tracking-tight mb-6"
                        style={{
                            fontFamily: "'Roc Grotesk', sans-serif",
                            fontStyle: 'normal',
                            fontWeight: 700,
                            color: 'rgb(255, 255, 255)',
                            fontSize: '60px',
                            lineHeight: '60px'
                        }}
                    >
                        Photography
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        As a contemporary dancer and choreographer and developing my own research-driven work I am collaborating with photographers, visual artists, cultural institutions or brands. I am always interested in new artistic collaborations that explore movement, space, and image.                    </motion.p>
                </div>

                {/* Standardized 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                            className="group relative overflow-hidden bg-[#111] cursor-pointer rounded-sm"
                            style={{ aspectRatio: '1 / 1' }}
                            onClick={() => setSelectedProject(item)}
                        >
                            {/* Overlay for aesthetic */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700 z-10"></div>

                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-[1.05]"
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

            {/* Modal for Expanded Project Details */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-[#121212] flex flex-col overflow-y-auto"
                    >
                        {/* Modal Header */}
                        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-6 md:px-12 bg-gradient-to-b from-[#121212] to-transparent">
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                onClick={() => setSelectedProject(null)}
                                className="text-white flex items-center gap-2 hover:text-[#7a8208] transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                                <span className="font-bold tracking-widest uppercase text-xs">Back to Gallery</span>
                            </motion.button>
                        </div>

                        {/* Modal Content */}
                        <div className="max-w-[1500px] w-full mx-auto px-6 lg:px-12 py-10">
                            {/* Title Segment */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="mb-16 text-center"
                            >
                                <span className="text-[#7a8208] text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
                                    {selectedProject.category}
                                </span>
                                <h2
                                    className="text-white text-5xl md:text-7xl font-bold tracking-tight"
                                    style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                >
                                    {selectedProject.title}
                                </h2>
                            </motion.div>

                            {/* 6 Image Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {selectedProject.gallery?.map((imgSrc, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                                        className="relative bg-[#1a1a1a] rounded-sm overflow-hidden"
                                        style={{ aspectRatio: '1 / 1' }}
                                    >
                                        <img
                                            src={imgSrc}
                                            alt={`${selectedProject.title} image ${idx + 1}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
