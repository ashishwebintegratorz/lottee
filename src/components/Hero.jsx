'use client';

import { motion } from 'framer-motion';

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
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center pt-52 md:pt-72 lg:pt-80 pb-32 md:pb-48 lg:pb-52">
                <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
                    <div className="flex flex-col relative text-white space-y-4 sm:space-y-6 md:space-y-8">
                        {/* Welcome at my */}
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-[8.5vw] sm:text-[9vw] md:text-[8.5vw] lg:text-[7vw] xl:text-[80px] 2xl:text-[90px] font-medium leading-[0.88] tracking-tight ml-[2vw] sm:ml-[2vw] md:ml-[3%] lg:ml-[4%] xl:ml-[6%]"
                            style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                        >
                            Welcome at my
                        </motion.h1>

                        {/* Performances & */}
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-[8.5vw] sm:text-[9vw] md:text-[8.5vw] lg:text-[7vw] xl:text-[80px] 2xl:text-[90px] font-medium leading-[0.88] tracking-tight ml-[4vw] sm:ml-[4vw] md:ml-[5%] lg:ml-[6%] xl:ml-[8%]"
                            style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                        >
                            Performances &
                        </motion.h1>

                        {/* Middle Row: Arrows + Choreography */}
                        <div className="flex items-center gap-[4vw] sm:gap-[3vw] md:gap-[4vw] lg:gap-[5vw] xl:gap-[60px] ml-[15vw] sm:ml-[20vw] md:ml-[12%] lg:ml-[18%] xl:ml-[320px]">
                            {/* Animated Arrows */}
                            <div className="flex flex-col space-y-[0px] leading-none shrink-0 pt-1 text-white">
                                <motion.span
                                    className="text-[6vw] sm:text-[5vw] md:text-[5vw] lg:text-[6vw] xl:text-[60px] leading-[0.6]"
                                    animate={{ x: [0, 10, 10, 0, 0] }}
                                    transition={{
                                        duration: 4,
                                        times: [0, 0.3, 0.5, 0.8, 1],
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >→</motion.span>
                                <motion.span
                                    className="text-[6vw] sm:text-[5vw] md:text-[5vw] lg:text-[6vw] xl:text-[60px] leading-[0.6] ml-[1.3vw] md:ml-[5px]"
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
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                className="text-[8.5vw] sm:text-[9vw] md:text-[8.5vw] lg:text-[7vw] xl:text-[80px] 2xl:text-[90px] font-medium leading-[0.88] tracking-tight"
                                style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                            >
                                Choreography
                            </motion.h1>
                        </div>

                        {/* Projects */}
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            className="text-[8.5vw] sm:text-[9vw] md:text-[8.5vw] lg:text-[7vw] xl:text-[80px] 2xl:text-[90px] font-medium leading-[0.88] tracking-tight ml-[4vw] sm:ml-[4vw] md:ml-[5%] lg:ml-[6%] xl:ml-[8%]"
                            style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                        >
                            Projects
                        </motion.h1>
                    </div>

                    {/* Desktop Date & Location */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="hidden lg:block text-white absolute right-12 top-12 md:top-26"
                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                    >
                        <p className="text-[18px] font-bold tracking-[0.2em] text-right uppercase mt-12">
                            Stay Tuned
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Date & Location */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="lg:hidden absolute bottom-24 left-6 sm:left-12 z-10 text-white"
            >
                <p className="text-[18px] font-bold tracking-[0.1em] uppercase mt-4">
                    Stay Tuned
                </p>
            </motion.div>
        </section>
    );
}
