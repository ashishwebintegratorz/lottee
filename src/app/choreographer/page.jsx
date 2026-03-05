'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ChoreographerPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const stagger = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { staggerChildren: 0.2 }
    };

    return (
        <main className="min-h-screen bg-[#111111] text-white pt-40 pb-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Hero Section */}
                <section className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full aspect-[21/9] overflow-hidden rounded-sm mb-12"
                    >
                        <Image
                            src="/Lotte_AlexConu_125.jpg"
                            alt="Lotte Aimée Choreographer"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="text-[12vw] md:text-[8vw] lg:text-[120px] font-bold tracking-tight uppercase"
                                style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                            >
                                Choreographer
                            </motion.h1>
                        </div>
                    </motion.div>
                </section>

                {/* Biography Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-40 items-center">
                    <motion.div {...fadeIn}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wide" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>
                            Background & Training
                        </h2>
                        <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
                            <p>
                                Born in 1996 in the Netherlands, Lotte Aimée de Weert trained at ArtEZ University of the Arts in Arnhem before moving to Paris to further develop her artistic language. There, she deepened her practice in classical ballet, contemporary dance, and the Graham technique, building a strong and versatile technical foundation.
                            </p>
                            <p>
                                Alongside her physical training, she expanded her interpretative range through the study of Method Acting with Jack Waltzer, a long-standing member of the Actors Studio in New York. This dual foundation — rigorous physicality combined with dramatic depth — has shaped her distinctive artistic presence.
                            </p>
                            <p>
                                Her career has led her to perform both on stage and in front of the camera, cultivating a refined sensitivity to the impact of movement within the frame and to the dialogue between dance and other artistic disciplines.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl"
                    >
                        <Image
                            src="/IMG_3005 New (2).jpg"
                            alt="Lotte Aimée Portrait"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </section>

                {/* Choreographic Language Section */}
                <section className="mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 uppercase tracking-tight" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>
                            Her Choreographic Language
                        </h2>
                        <div className="h-1 w-20 bg-white mx-auto mb-8" />
                        <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed italic">
                            "Rooted in her Dutch origins and artistically shaped by Paris, Lotte develops a movement language that bridges physical intensity with emotional precision."
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="relative aspect-[3/4] overflow-hidden rounded-sm"
                        >
                            <Image src="/Lotte_AlexConu_112.jpg" alt="Dance performance" fill className="object-cover" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative aspect-[3/4] overflow-hidden rounded-sm translate-y-12"
                        >
                            <Image src="/IMG_3006 New (3).jpg" alt="Artistic movement" fill className="object-cover" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="relative aspect-[3/4] overflow-hidden rounded-sm"
                        >
                            <Image src="/_MIV8630.JPG" alt="Choreography detail" fill className="object-cover" />
                        </motion.div>
                    </div>
                </section>

                {/* Professional Career Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1 relative aspect-square overflow-hidden rounded-sm"
                    >
                        <Image
                            src="/gallerie1 New.jpg"
                            alt="Fashion performance"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div {...fadeIn} className="order-1 lg:order-2">
                        <div className="space-y-8 text-lg text-white/70 leading-relaxed font-light">
                            <p>
                                A versatile performer, she moves seamlessly between dance, theatre, and fashion. She has performed in shows, performances, and presentations for major fashion houses including <span className="text-white font-medium">Valentino, Cartier, Hermès, and Flora Miranda</span> — experiences that further sharpened her understanding of presence, image, and narrative embodiment.
                            </p>
                            <p>
                                Her choreographic research explores the relationship between body, space, and storytelling — moving fluidly from intimate solos to collaborative stage works — always guided by a search for authenticity, tension, and embodied truth.
                            </p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-12 px-10 py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 font-bold tracking-widest uppercase text-sm"
                        >
                            View Projects
                        </motion.button>
                    </motion.div>
                </section>

            </div>
        </main>
    );
}
