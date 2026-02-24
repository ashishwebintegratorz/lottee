'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-[100dvh] w-full overflow-hidden bg-black">
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
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
                    <div className="flex flex-col relative text-white space-y-4 sm:space-y-6 md:space-y-8">
                        {/* Performances */}
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-[11vw] sm:text-[10vw] md:text-[90px] lg:text-[120px] xl:text-[130px] font-medium leading-[0.88] tracking-tight ml-[3vw] sm:ml-[4vw] md:ml-[8%] lg:ml-[10%] mt-4 md:mt-8"
                            style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                        >
                            Performances
                        </motion.h1>

                        {/* Middle Row: Arrows + Choreography */}
                        <div className="flex items-center gap-[4vw] sm:gap-[3vw] md:gap-[30px] lg:gap-[60px] xl:gap-[100px] ml-[1vw] sm:ml-[10vw] md:ml-[12%] lg:ml-[18%] xl:ml-[280px]">
                            {/* Animated Arrows */}
                            <div className="flex flex-col -space-y-2 sm:-space-y-3 md:-space-y-[18px] lg:-space-y-[26px] leading-none shrink-0 pt-1 text-white">
                                <motion.span
                                    className="text-[7vw] sm:text-[6vw] md:text-[50px] lg:text-[80px] xl:text-[100px] leading-[0.6]"
                                    animate={{ x: [0, 10, 10, 0, 0] }}
                                    transition={{
                                        duration: 4,
                                        times: [0, 0.3, 0.5, 0.8, 1],
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >→</motion.span>
                                <motion.span
                                    className="text-[7vw] sm:text-[6vw] md:text-[50px] lg:text-[80px] xl:text-[100px] leading-[0.6] ml-[1.3vw] md:ml-[5px]"
                                    animate={{ x: [10, 0, 0, 10, 10] }}
                                    transition={{
                                        duration: 4,
                                        times: [0, 0.3, 0.5, 0.8, 1],
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >→</motion.span>
                            </div>

                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="text-[11vw] sm:text-[10vw] md:text-[90px] lg:text-[120px] xl:text-[130px] font-medium leading-[0.88] tracking-tight"
                                style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                            >
                                Choreography
                            </motion.h1>
                        </div>

                        {/* Projects */}
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="text-[11vw] sm:text-[10vw] md:text-[90px] lg:text-[120px] xl:text-[130px] font-medium leading-[0.88] tracking-tight ml-[10vw] sm:ml-[16vw] md:ml-[18%] lg:ml-[22%] xl:ml-[24%]"
                            style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                        >
                            Projects
                        </motion.h1>
                    </div>

                    {/* Desktop Date & Location */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hidden lg:block text-white absolute right-12 top-0 mt-8"
                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                    >
                        <p className="text-[23px] font-medium tracking-wide mb-2 opacity-80">
                            Paris, France
                        </p>
                        <p className="text-[18px] font-bold tracking-[0.2em] text-right uppercase">
                            Available for 2026
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Date & Location */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="lg:hidden absolute bottom-24 left-6 sm:left-12 z-10 text-white"
            >
                <p className="text-[16px] font-medium tracking-wide mb-1 opacity-90">
                    Paris, France
                </p>
                <p className="text-[18px] font-bold tracking-[0.1em] uppercase">
                    Available for 2026
                </p>
            </motion.div>
        </section>
    );
}
