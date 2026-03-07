'use client';

import { motion } from 'framer-motion';

const heroText =
    'leading-[0.92] tracking-[-0.02em] font-medium text-[clamp(2.15rem,8.5vw,6rem)] sm:text-[clamp(2.75rem,9vw,6.5rem)] md:text-[clamp(2.85rem,7.5vw,5.5rem)] lg:text-[clamp(3.25rem,7vw,6rem)] xl:text-[5.5rem] 2xl:text-[6.25rem]';

export default function Hero() {
    return (
        <section className="relative h-[100dvh] lg:h-[115vh] w-full overflow-hidden bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/expo-new-hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/25" aria-hidden />
            </div>

            {/* Content — neat, clean hierarchy; centered on mobile, nudge on desktop (change lg:ml-[14rem] to adjust) */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-[5vh] sm:pt-[22vh] md:pt-[18vh] lg:pt-[16vh] pb-24 sm:pb-28 md:pb-32 lg:pb-36">
                <div className="relative w-full max-w-[1400px] mx-auto flex justify-center">
                    <div
                        className={`flex flex-col text-white overflow-hidden w-full max-w-[min(90vw,1100px)] lg:ml-[6rem] xl:ml-[14rem] ${heroText}`}
                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0 }}
                        >
                            Performance
                        </motion.h1>

                        {/* <motion.h1
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                            className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 pl-[0.45em] sm:pl-[0.5em] md:pl-[0.55em] lg:pl-[0.6em]"
                        >
                            my Performances &
                        </motion.h1> */}

                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
                            className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 mt-3 sm:mt-4 md:mt-5 lg:mt-6 min-w-0 pl-[0.5rem] sm:pl-[1em] md:pl-[1.1em] lg:pl-[1.2em]"
                        >
                            <div className="flex flex-col leading-none shrink-0 text-white select-none items-center justify-center" aria-hidden>
                                <motion.span
                                    className="text-[clamp(1.75rem,5vw,3.75rem)] leading-[0.72]"
                                    animate={{ x: [0, 6, 6, 0, 0] }}
                                    transition={{ duration: 3.5, times: [0, 0.28, 0.5, 0.78, 1], repeat: Infinity, ease: "easeInOut" }}
                                >
                                    →
                                </motion.span>
                                <motion.span
                                    className="text-[clamp(1.75rem,5vw,3.75rem)] leading-[0.72] ml-0.5 sm:ml-1"
                                    animate={{ x: [6, 0, 0, 6, 6] }}
                                    transition={{ duration: 3.5, times: [0, 0.28, 0.5, 0.78, 1], repeat: Infinity, ease: "easeInOut" }}
                                >
                                    →
                                </motion.span>
                            </div>
                            <h1 className="min-w-0">Choreography</h1>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.36 }}
                            className="mt-3 sm:mt-4 md:mt-5 lg:mt-6"
                        >
                            Movement
                        </motion.h1>
                    </div>

                    {/* Top right: two-line block — reference style */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden lg:flex flex-col absolute right-0 -top-32 text-right"
                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                    >
                        <p className="text-[13px] tracking-[0.2em] uppercase text-white/95">
                            Stay Tuned
                        </p>
                        <p className="text-[11px] tracking-[0.18em] uppercase text-white/75 mt-1.5">
                            Coming Soon
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Mobile: bottom left */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="lg:hidden absolute bottom-28 left-5 sm:left-8 z-10 text-white"
                style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
            >
                <p className="text-sm font-medium tracking-[0.12em] uppercase text-white/90">
                    Stay Tuned
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-white/70 mt-1">
                    Coming Soon
                </p>
            </motion.div>
        </section >
    );
}
