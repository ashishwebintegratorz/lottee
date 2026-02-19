'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsPage() {
    const projects = [
        { id: 1, title: 'Sleeping Woman', category: 'Classic Gallery', image: '/project1.jpg' },
        { id: 2, title: 'Portrait of a Man in a Turban', category: 'Classic Gallery', image: '/project2.jpg' },
        { id: 3, title: 'The Travelling Companions', category: 'Classic Gallery', image: '/project3.jpg' },
        { id: 4, title: 'Still Life with a Copy of De Waere Mercurius', category: 'Classic Gallery', image: '/project4.jpg' },
        { id: 5, title: 'Summer Evening', category: 'Classic Gallery', image: '/project5.jpg' },
        { id: 6, title: 'The Champion', category: 'Classic Gallery', image: '/projetc6.jpg' }, // Note the misspelling from the filesystem
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
                        style={{ fontFamily: "' sans-serif', Roc Grotesk" }}
                    >
                        Multidisciplinary Projects
                    </motion.h1>
                </div>

                {/* 2-Column Grid with adjusted spacing */}
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
                            {/* Image Card - Increased width / Decreased length */}
                            <div className="relative aspect-[1.15/1] overflow-hidden rounded-sm bg-[#1a1a1a] mb-8">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Centered Details below image */}
                            <div className="text-center space-y-2">
                                <h3 className="text-white text-2xl font-bold tracking-tight transition-colors" style={{ fontFamily: "' sans-serif', Roc Grotesk" }}>
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
