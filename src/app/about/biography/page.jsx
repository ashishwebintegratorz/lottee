'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BiographyPage() {
    const sections = [
        {
            title: "ABOUT",
            content: [
                "Lotte Aimée de Weert is a dancer originally from the Netherlands. I’m at the ArtEZ University of the Arts in Arnhem, I later moved to Paris where I further developed my dance practice through various techniques: classical ballet, contemporary dance, and the Graham technique. At the same time, I deepened my approach to performance by studying Method Acting with Jack Waltzer, a long-standing member of the Actors Studio in New York.",
                "My career has led me to perform both on stage and in front of the camera. This dual experience has nurtured my interest in the impact of movement within the image, as well as in the dialogue between dance and other artistic disciplines.",
                "Guided by my background in dance yet seeking multidisciplinary exchange, I develop my own projects within the association CIELA, which has received support by the Centre National de la Danse and Ménagerie de Verre in Paris. Alongside this work, I continue to collaborate on various dance projects. I performed in presentations for fashion houses such as Valentino, Cartier, and Flora Miranda, and regularly work with the Dutch National Opera. In parallel, I teaches the GYROTONIC® Method, sharing my approach to movement and body awareness."
            ]
        },
        {
            title: "CIE LA — Creative Company",
            content: [
                "CIE LA is a non-profit association (association loi 1901) founded in 2017 by Lotte Aimée de Weert. It was born from a desire to develop choreographic research in collaboration with other artists, through exploratory sessions supported by the Centre National de la Danse (CND) in Pantin and La Ménagerie de Verre in Paris.",
                "In 2019, the association took a pause due Lotte Aimée’s commitments as a performer in other artistic projects. It was revived in 2025 with renewed energy.",
                "Today, the company develops choreographic pieces for the stage as well as site-specific works designed for heritage sites, museums, exhibition spaces, and gallery's.",
                "Sculpture and cultural heritage are essential sources of inspiration and deeply inform my creative process. I explore forms both in movement and in the visual arts. The legacy of women artists and art history are an integral part of my life and artistic sensibility, which led to my first creation, Ma Valse d’aujourd’hui."
            ]
        },
        {
            title: "ARTISTIC IDENTITY",
            content: [
                "Arriving in Paris at a young age profoundly shaped my artistic journey. Being exposed to such a wide range of arts and cultures greatly broadened my interests and sources of inspiration.",
                "As a dancer, I always felt the need for a second discipline. My encounter with theatre opened an essential space in my work as a performer and naturally led me toward multidisciplinary projects. Physical endurance has always held a central place in my relationship to the body and to the stage, ever since a young age.",
                "Today, I am fortunate to evolve within different artistic worlds, where each creation and each encounter continues to nourish my practice and refine my sensitivity, both artistically and personally."
            ],
            listTitle: "Within this framework, her work moves between:",
            list: [
                "dance and performance",
                "movement and image",
                "Interdisciplinary collaborations"
            ]
        }
    ];

    return (
        <main className="bg-[#111111] min-h-screen text-white pt-40 pb-32 px-6 lg:px-12">
            <div className="max-w-[1000px] mx-auto">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <Link href="/about" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Overview
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                    >
                        Biography
                    </h1>
                    <div className="w-24 h-1 bg-[#7a8208]"></div>
                </motion.header>

                {/* Content Sections */}
                <div className="space-y-32">
                    {sections.map((section, idx) => (
                        <motion.section
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="relative group"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                                {/* Section Title */}
                                <div className="lg:col-span-4">
                                    <h2
                                        className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#7a8208]"
                                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                    >
                                        {section.title}
                                    </h2>
                                </div>

                                {/* Section Content */}
                                <div className="lg:col-span-8 flex flex-col gap-6">
                                    {section.content.map((p, pIdx) => (
                                        <p
                                            key={pIdx}
                                            className="text-lg md:text-xl text-gray-300 font-light leading-relaxed"
                                            style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                                        >
                                            {p}
                                        </p>
                                    ))}

                                    {/* Questions (for Identity section) */}
                                    {section.questions && (
                                        <div className="mt-8 space-y-4 border-l-2 border-white/10 pl-8">
                                            {section.questions.map((q, qIdx) => (
                                                <p key={qIdx} className="text-xl md:text-2xl font-medium italic text-white/90">
                                                    "{q}"
                                                </p>
                                            ))}
                                        </div>
                                    )}

                                    {/* List Title (for CIE.LA section) */}
                                    {section.listTitle && (
                                        <p className="text-lg font-bold uppercase tracking-widest text-[#7a8208] mt-6">
                                            {section.listTitle}
                                        </p>
                                    )}

                                    {/* List (for CIE.LA section) */}
                                    {section.list && (
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                            {section.list.map((item, iIdx) => (
                                                <li key={iIdx} className="flex items-center gap-3 text-gray-400 group/item hover:text-white transition-colors">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#7a8208] group-hover/item:scale-150 transition-transform"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* Footer (for Identity section) */}
                                    {section.footer && (
                                        <p className="text-lg font-bold text-white mt-8 tracking-wide">
                                            {section.footer}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-40 text-center border-t border-white/10 pt-20"
                >
                    <Link
                        href="/contact"
                        className="inline-block bg-[#7a8208] hover:bg-[#6b7207] text-white px-12 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl"
                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                    >
                        Collaborate with Lotte
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
