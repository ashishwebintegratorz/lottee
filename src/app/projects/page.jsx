'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import HoverEffect from '@/components/HoverEffect';

export default function ProjectsPage() {
    const [activeVideo, setActiveVideo] = useState(null);

    const videos = [
        { id: 'v1', title: 'Performance Reel 1', category: 'Live Dance', src: '/dancervedio1.mp4' },
        { id: 'v2', title: 'Performance Reel 2', category: 'Live Dance', src: '/dancervedio2.mp4' },
        { id: 'v3', title: 'Performance Reel 3', category: 'Live Dance', src: '/dancervedio3.mp4' }
    ];

    const bottomVideos = [
        { id: 'v4', title: 'Performance Reel 4', category: 'Live Dance', src: '/dancervedio4.mp4' },
        { id: 'v5', title: 'Performance Reel 5', category: 'Live Dance', src: '/dancervedio5.mp4' },
        { id: 'v6', title: 'Performance Reel 6', category: 'Live Dance', src: '/dancervedio6.mp4' },
        { id: 'v7', title: 'Performance Reel 7', category: 'Live Dance', src: '/dancervedio7.mp4' }
    ];

    const projects = [
        { id: 1, title: 'Sleeping Woman', category: 'Classic Gallery', image: '/IMG_3749.JPG', hoverImage: '/IMG_3750.JPG' },
        { id: 2, title: 'Portrait of a Man in a Turban', category: 'Classic Gallery', image: '/utrshootl.jpg', hoverImage: '/utsurioshoot3.jpg' },
        { id: 3, title: 'The Travelling Companions', category: 'Classic Gallery', image: '/lastphoto.JPG', hoverImage: '/travelling.jpg' },
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
                        Through her association CIELA, Lotte Aimée develops her own choreographic projects and long-term artistic research, with the support of the Centre National de la Danse and La Ménagerie de Verre in Paris. Alongside these projects, she also performs as a dancer in other artistic collaborations.                    </motion.p>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                    {/* Render Videos First */}
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group cursor-pointer"
                        >
                            {/* Video Card — perfectly square like masonry style */}
                            <div
                                className="relative w-full overflow-hidden rounded-sm bg-[#111]"
                                style={{ aspectRatio: '1 / 1' }}
                                onClick={() => setActiveVideo(activeVideo === video.id ? null : video.id)}
                            >
                                <video
                                    src={video.src}
                                    className="w-full h-full object-cover relative z-0"
                                    autoPlay
                                    loop
                                    playsInline
                                    muted={activeVideo !== video.id}
                                />

                                {/* Overlay to indicate it's clickable for sound */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10 flex items-center justify-center">
                                    {activeVideo !== video.id ? (
                                        <div className="bg-black/50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                                <line x1="23" y1="9" x2="17" y2="15"></line>
                                                <line x1="17" y1="9" x2="23" y2="15"></line>
                                            </svg>
                                        </div>
                                    ) : (
                                        <div className="bg-black/50 text-[#7a8208] p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Centered Details below video */}
                            <div className="text-center space-y-2 mt-8">
                                <h3
                                    className="text-white text-2xl font-bold tracking-tight"
                                    style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                >
                                    {video.title}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium">
                                    {video.category}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Render Image Projects */}
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group cursor-pointer"
                        >
                            {/* Image Card — perfectly square like masonry style */}
                            <div
                                className="relative w-full overflow-hidden rounded-sm bg-[#111]"
                                style={{ aspectRatio: '1 / 1' }}
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

                    {/* Render Remaining Bottom Videos */}
                    {bottomVideos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group cursor-pointer"
                        >
                            {/* Video Card */}
                            <div
                                className="relative w-full overflow-hidden rounded-sm bg-[#111]"
                                style={{ aspectRatio: '1 / 1' }}
                                onClick={() => setActiveVideo(activeVideo === video.id ? null : video.id)}
                            >
                                <video
                                    src={video.src}
                                    className="w-full h-full object-cover relative z-0"
                                    autoPlay
                                    loop
                                    playsInline
                                    muted={activeVideo !== video.id}
                                />

                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10 flex items-center justify-center">
                                    {activeVideo !== video.id ? (
                                        <div className="bg-black/50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                                <line x1="23" y1="9" x2="17" y2="15"></line>
                                                <line x1="17" y1="9" x2="23" y2="15"></line>
                                            </svg>
                                        </div>
                                    ) : (
                                        <div className="bg-black/50 text-[#7a8208] p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Centered Details below video */}
                            <div className="text-center space-y-2 mt-8">
                                <h3
                                    className="text-white text-2xl font-bold tracking-tight"
                                    style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                >
                                    {video.title}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium">
                                    {video.category}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}