'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import HoverEffect from '@/components/HoverEffect';

export default function ProjectsPage() {
    const projects = [
        { id: 1, title: 'Sleeping Woman', category: 'Classic Gallery', image: '/IMG_3749.JPG', hoverImage: '/IMG_3750.JPG' },
        { id: 2, title: 'Portrait of a Man in a Turban', category: 'Classic Gallery', image: '/Lotte_AlexConu_112.jpg', hoverImage: '/Lotte_AlexConu_125.jpg' },
        { id: 3, title: 'The Travelling Companions', category: 'Classic Gallery', image: '/_MIV8630.JPG', hoverImage: '/travelling.jpg' },
        { id: 4, title: 'Still Life with a Copy of De Waere Mercurius', category: 'Classic Gallery', image: '/gallery2.jpeg', hoverImage: '/WhatsApp Image 2026-02-15 at 18.08.48.jpeg' },
        { id: 5, title: 'Summer Evening', category: 'Classic Gallery', image: '/gallery4.jpeg', hoverImage: '/gallery5.jpeg' },
        { id: 6, title: 'The Champion', category: 'Classic Gallery', image: '/gallery6.jpeg', hoverImage: '/WhatsApp Image 2026-02-15 at 18.08.49 (2).jpeg' },
    ];

    return (
        <main className="min-h-screen bg-[#1a1a1a] pt-40 pb-24 px-6 lg:px-12">
            <div className="max-w-[1350px] mx-auto">
                {/* Centered Header */}
                <div className="text-center mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-5xl md:text-6xl font-bold tracking-tight mb-6"
                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                    >
                        Choreography & Dancer
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        Through her association Lotte Aimée, supported by the Centre National de la Danse and La Ménagerie de Verre in Paris, Lotte develops her own choreographic projects and long-term artistic research.
                    </motion.p>
                </div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group cursor-pointer"
                        >
                            {/* Image Card — portrait ratio, no stretching */}
                            <div
                                className="relative w-full overflow-hidden rounded-sm bg-[#111]"
                                style={{ aspectRatio: '3 / 4' }}
                            >
                                <HoverEffect
                                    image1={project.image}
                                    image2={project.hoverImage}
                                    displacementImage="/dis.png/diss.png"
                                    intensity={0.3}
                                    speedIn={1.2}
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Centered Details below image */}
                            <div className="text-center space-y-2 mt-8">
                                <h3
                                    className="text-white text-2xl font-bold tracking-tight"
                                    style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                >
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium">
                                    {project.category}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}