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
                    <div className="flex flex-col relative text-white">
                        {/* Unique */}
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-[14vw] sm:text-[12vw] md:text-[130px] lg:text-[146px] font-medium leading-[0.9] tracking-tight ml-[2vw] md:ml-[140px]"
                            style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                        >
                            Unique
                        </motion.h1>

                        {/* Middle Row: Arrows + Exhibition */}
                        <div className="flex items-center gap-4 sm:gap-8 md:gap-[60px] lg:gap-[100px] ml-[8vw] md:ml-[180px] lg:ml-[280px] mt-2 md:mt-0">
                            {/* Animated Arrows */}
                            <div className="flex flex-col -space-y-3 sm:-space-y-4 md:-space-y-[30px] leading-none shrink-0 pt-2">
                                <motion.span
                                    className="text-[9vw] sm:text-[50px] md:text-[80px] lg:text-[100px] leading-[0.6] text-white"
                                    animate={{ x: [0, 30, 30, 0, 0] }}
                                    transition={{
                                        duration: 4,
                                        times: [0, 0.3, 0.5, 0.8, 1],
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >→</motion.span>
                                <motion.span
                                    className="text-[9vw] sm:text-[50px] md:text-[80px] lg:text-[100px] leading-[0.6] ml-3 md:ml-[5px] text-white"
                                    animate={{ x: [30, 0, 0, 30, 30] }}
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
                                className="text-[14vw] sm:text-[12vw] md:text-[130px] lg:text-[146px] font-medium leading-[0.9] tracking-tight"
                                style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                            >
                                Exhibition
                            </motion.h1>
                        </div>

                        {/* Photography */}
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="text-[14vw] sm:text-[12vw] md:text-[130px] lg:text-[146px] font-medium leading-[0.9] tracking-tight ml-[12vw] md:ml-[150px] mt-2 md:mt-0"
                            style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                        >
                            Photography
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
                        <p className="text-[23px] font-medium tracking-wide mb-2">
                            8 JUNE – 15 AUGUST 2022
                        </p>
                        <p className="text-[23px] font-bold tracking-wide text-right">
                            LONDON, UK
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Date & Location */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="lg:hidden absolute bottom-24 left-6 z-10 text-white"
            >
                <div className="w-12 h-[2px] bg-white/50 mb-4"></div>
                <p className="text-[16px] font-medium tracking-wide mb-1 opacity-90">
                    8 JUNE – 15 AUGUST 2022
                </p>
                <p className="text-[18px] font-bold tracking-wide">
                    LONDON, UK
                </p>
            </motion.div>
        </section>
    );
}
