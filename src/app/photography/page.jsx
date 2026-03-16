'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const photographyItems = [
    {
        id: 1,
        title: 'The Quiet Body',
        subtitle: 'by Malmarstudio',
        description: <p>
            poetry of form photo by Malmarstudio <br />
            Designer : Jotaro Saito.
        </p>,
        image: '/mainquiet.jpeg',
        span: 'md:col-span-2',
        gallery: [
            '/photographyshoot2.jpeg',
            '/photographyshoot3.jpeg',
            '/photographyshoot4.jpeg',
            '/photographyshoot5.jpeg',
            '/photographyshoot6.jpeg',
            '/photographyshoot7.jpeg',
            // '/photographyshoot8.jpeg',
            // '/photographyshoot9.jpeg',
            // '/photographyshoot1.jpeg'
        ]
    },
    {
        id: 2,
        title: 'Utsuroi',
        subtitle: 'by damien bourletsis',
        description: <p>
            DBmotion prod  videographer: damien bourletsis. <br />
            Designer : jotaro saito <br />
        </p>,
        image: '/Utsuroi 1.jpeg',
        span: 'md:col-span-1',
        gallery: [
            '/Utsuroi 2.jpeg',
            '/Utsuroi 3.jpeg',
            '/Utsuroi 4.jpeg',
            '/Utsuroi 5.jpeg',
            '/Utsuroi 6.jpeg',
        ]
    },
    {
        id: 3,
        title: 'Kinetic Form',
        subtitle: 'by Emma Leforestier',
        description: <p>
            Photographer : Emma Leforestier <br />
            Styling : @emma_leforestier <br />
            Leather pieces : @ichor_creation <br />
            Assistant : juliensq5 <br />
        </p>,
        image: '/gallery6.jpeg',
        gallery: [
            '/ioffer1.jpeg',
            '/offer2.jpeg',
            '/offer4.jpeg',
            '/contact img.jpeg',
            '/gallery5.jpeg',
            '/gallery6.jpeg',
        ]
    },
    {
        id: 4,
        title: 'Soft Gravity',
        subtitle: 'by Alexconustudio',
        description: ' Untamed Motion photo by @Alexconustudio.',
        image: '/utsurioshoot5.jpeg',
        gallery: [
            '/imggl1.jpeg',
            '/softgravitymain.jpeg',
            '/utsurioshoot5.jpeg',
            '/utsurioshoot4.jpeg',
            '/utsurioshoot3.jpg',
            '/urben2.jpeg',
            '/utrshootl.jpg',
        ]
    },
    {
        id: 5,
        title: 'La danseuse de Degas',
        subtitle: 'by museeorsay',
        description: 'Dani Remiao photography @museeorsay.',
        image: '/IMG_3749.JPG',
        gallery: [
            '/IMG_3754.JPG',
            '/IMG_3750.JPG',
            '/IMG_3749.JPG',
            /* '/utsurioshoot4.jpeg',
             '/utsurioshoot3.jpg',
             '/urben2.jpeg',
             '/utrshootl.jpg', */
        ]
    },

    {
        id: 6,
        title: ' Anitjer ',
        subtitle: 'by Alexconustudio',
        description: 'photoshoot with Alexconustudio',
        image: '/gallery2.jpeg',
        gallery:
            [
                '/aboutimg.jpeg',
                '/gallery2.jpeg',
                /* '/IMG_3749.JPG',
                 '/utsurioshoot4.jpeg',
                  '/utsurioshoot3.jpg',
                  '/urben2.jpeg',
                  '/utrshootl.jpg', */
            ]
    },

    {
        id: 7,
        title: 'OCCO Art gallery',
        subtitle: 'by marianfilmmaker',
        description: <p>
            Designer: @emiliosalinasatelier  <br />
            MUA :jose_sande_makeup <br />
            in collaboration with OCCO art gallery <br />
        </p>,
        image: '/occo1.jpeg',
        span: 'md:col-span-2',
        gallery: [
            '/occo2.jpeg',
            '/occo3.jpeg',
            '/occo1.jpeg',
            // '/photographyshoot6.jpeg',
            // '/photographyshoot7.jpeg',
            // '/photographyshoot8.jpeg',
            // '/photographyshoot9.jpeg',
            // '/photographyshoot1.jpeg'
        ]
    },

    {

        id: 8,
        title: 'Fred',
        subtitle: 'by Fred Smink',
        description: 'Fred Smink photography.',
        image: '/gallery.jpg',
        span: 'md:col-span-1',
        gallery: [
            '/gallery81.jpeg',
            '/gallery.jpg',
            '/urben22.jpg',
            '/gallery82.jpeg',
            '/gallery83.jpeg',
        ]
    }
    /*
    {
        id: 3,
        title: 'Kinetic Form',
        category: 'Name of the shoot',
        description: 'Insert the sub text describing the Kinetic Form photographic exploration.',
        image: '/gallery6.jpeg',
        gallery: [
            '/ioffer1.jpeg',
            '/offer2.jpeg',
            '/offer4.jpeg',
            '/contact img.jpeg',
            '/gallery5.jpeg',
            '/gallery6.jpeg',
        ]
    },
    {
        id: 4,
        title: 'Soft Gravity',
        category: 'Name of the shoot',
        description: 'Insert the sub text describing the Soft Gravity visual series.',
        image: '/utsurioshoot5.jpeg',
        gallery: [
            '/imggl1.jpeg',
            '/softgravitymain.jpeg',
            '/utsurioshoot5.jpeg',
            '/utsurioshoot4.jpeg',
            '/utsurioshoot3.jpg',
            '/urben2.jpeg',
            '/utrshootl.jpg',
        ]
    }*/
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

            <div className="max-w-[1800px] mx-auto">

                {/* HEADER */}

                <div className="text-center mb-24">

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="tracking-tight mb-6 text-[45px] md:text-[60px] leading-[45px] md:leading-[60px]"
                        style={{
                            fontFamily: "'Roc Grotesk', sans-serif",
                            fontWeight: 700,
                            color: '#fff',
                        }}
                    >
                        Photography
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        Guided by my background in dance, I develop my choreographic work. I also continue to perform and collaborate on various projects, often crossing into multidisciplinary disciplines.                    </motion.p>

                </div>

                {/* PHOTO GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

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
                            className="group relative overflow-hidden cursor-pointer rounded-sm"
                            style={{ aspectRatio: '3/4' }}
                            onClick={() => setSelectedProject(item)}
                        >

                            <div className="absolute inset-0 bg-black/20 md:bg-black/0 md:group-hover:bg-black/30 transition-all duration-700 z-10"></div>

                            <img
                                src={item.image}
                                alt={item.title}
                                className={`w-full h-full transition-transform duration-1000 md:group-hover:scale-[1.05] ${item.id === 5 || item.id === 7 ? 'object-contain bg-[#111]' : 'object-cover object-top'}`}
                            />

                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:translate-y-4 md:group-hover:translate-y-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
                                <h3
                                    className="text-white text-2xl font-bold tracking-tight"
                                    style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                >
                                    {item.title}
                                </h3>
                                {item.subtitle && (
                                    <p className="text-white/80 text-sm mt-1 font-medium tracking-wide">
                                        {item.subtitle}
                                    </p>
                                )}
                            </div>

                        </motion.div>
                    ))}

                </div>

                {/* CTA */}

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
                            <path
                                d="M0 8H38M38 8L31 1M38 8L31 15"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                        </svg>

                    </a>

                </motion.div>

            </div>

            {/* MODAL */}

            <AnimatePresence>

                {selectedProject && (

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-[#121212] flex flex-col overflow-y-auto"
                    >

                        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-6 md:px-12 bg-gradient-to-b from-[#121212] to-transparent">

                            <button
                                onClick={() => setSelectedProject(null)}
                                className="text-white flex items-center gap-2 hover:text-[#7a8208] transition-colors"
                            >
                                ← Back to Gallery
                            </button>

                        </div>

                        <div className="max-w-[1500px] w-full mx-auto px-6 lg:px-12 py-10">

                            <div className="mb-16 text-center">

                                <span className="text-[#7a8208] text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
                                    {selectedProject.category}
                                </span>

                                <h2
                                    className="text-white text-5xl md:text-7xl font-bold tracking-tight"
                                    style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                >
                                    {selectedProject.title}
                                </h2>

                                {selectedProject.description && (
                                    <div className="text-white/70 text-lg max-w-2xl mx-auto mt-6 leading-relaxed font-light">
                                        {selectedProject.description}
                                    </div>
                                )}

                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                                {selectedProject.gallery?.map((imgSrc, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                                        className="relative rounded-sm overflow-hidden"
                                        style={{ aspectRatio: '3/4' }}
                                    >

                                        <img
                                            src={imgSrc}
                                            alt={`${selectedProject.title} image ${idx + 1}`}
                                            className={`w-full h-full ${selectedProject.id === 5 || selectedProject.id === 7 ? 'object-contain bg-[#111]' : 'object-cover object-top'}`}
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