'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BiographyPage() {
    const sections = [
        {
            title: "ABOUT Lotte Aimée de Weert",
            content: [
                "Born in 1996 in the Netherlands, Lotte Aimée de Weert is a contemporary dancer and choreographer whose work bridges physical intensity with emotional precision. She began her formal training at ArtEZ University of the Arts in Arnhem, where she developed a rigorous technical foundation rooted in classical ballet and contemporary dance.",
                "Driven by a desire to expand her artistic language, she later moved to Paris — a city that would profoundly shape her creative identity. There, she deepened her practice in classical ballet, contemporary technique, and the Graham method, refining strength, articulation, and expressive clarity. This technical grounding forms the structural backbone of her movement vocabulary.",
                "Alongside her physical training, Lotte expanded her interpretative depth through the study of Method Acting with Jack Waltzer, a long-standing member of the Actors Studio in New York. This immersion into dramatic craft introduced a new dimension to her practice — one that integrates psychological presence, emotional authenticity, and narrative embodiment.",
                "The convergence of rigorous physical discipline and dramatic exploration has shaped her distinctive artistic presence — one that is both controlled and vulnerable, structured yet instinctive."
            ]
        },
        {
            title: "Artistic Identity & Choreographic Language",
            content: [
                "Rooted in her Dutch origins and artistically shaped by Paris, Lotte develops a movement language that navigates the space between tension and stillness, intimacy and projection. Her choreographic writing is informed by theatrical depth, cinematic awareness, and refined technical precision.",
                "Her work investigates the relationship between body, space, and storytelling. Whether in intimate solos or collaborative stage works, her creations explore how presence transforms within architectural environments and within the frame of the camera.",
                "A versatile performer, she moves fluidly between dance, theatre, and fashion. She has performed in shows, presentations, and interdisciplinary projects for major fashion houses including Valentino, Cartier, Hermès, and Flora Miranda. These experiences sharpened her understanding of image construction, timing, visual rhythm, and the embodied translation of narrative within high aesthetic environments."
            ],
            questions: [
                "How does movement shift when observed through the camera lens?",
                "What tension emerges between vulnerability and control?",
                "How can the body become both narrator and landscape?"
            ],
            footer: "Each project is guided by a search for authenticity, tension, and embodied truth."
        },
        {
            title: "CIE.LA — The Artistic Platform",
            content: [
                "Through her association CIE.LA, Lotte develops long-term choreographic research and multidisciplinary productions. Supported by institutions such as the Centre National de la Danse and La Ménagerie de Verre in Paris, CIE.LA serves as a space for experimentation, collaboration, and artistic development.",
                "CIE.LA reflects her commitment to expanding the boundaries of dance by integrating theatre, cinematic language, and visual composition into choreographic form."
            ],
            listTitle: "Within this framework, she creates works that move between:",
            list: [
                "Stage productions",
                "Short films",
                "Site-specific performances",
                "Video installations",
                "Interdisciplinary collaborations"
            ]
        },
        {
            title: "Multidisciplinary Practice",
            content: [
                "As a multifaceted creator, Lotte works interchangeably as: Choreographer, Performer, Dramaturgical collaborator, and Conceptual contributor.",
                "Her practice embraces different formats and contexts — from institutional theatres to alternative performance spaces and fashion environments. She approaches each project with sensitivity to spatial architecture, light, rhythm, and the invisible dialogue between performer and audience."
            ]
        },
        {
            title: "Current Practice",
            content: [
                "Today, Lotte works as a freelance artist based in Paris. She collaborates on dance and theatre productions internationally while continuing to choreograph and develop her own original pieces through CIE.LA.",
                "Her work remains anchored in exploration — a constant dialogue between body and narrative, structure and instinct, movement and meaning."
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
