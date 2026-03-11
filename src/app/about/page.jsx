'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Typed from 'typed.js';

const cards = [
    {
        title: "Her Choreographic Language",
        description: "Rooted in her Dutch origins and artistically shaped by Paris, Lotte desenvolves a movement language that bridges physical intensity with emotional precision. My work is informed by theatrical depth, cinematic awareness, and a refined technical clarity."
    },
    {
        title: "Fashion & Narrative",
        description: "A versatile performer, she moves seamlessly between dance, theatre, and fashion. I have performed in shows and presentations for major fashion houses including Valentino, Cartier, Hermès, and Flora Miranda — sharpening her understanding of narrative embodiment."
    },
    {
        title: "Choreographic Research",
        description: "My research explores the relationship between body, space, and storytelling — moving fluidly from intimate solos to collaborative stage works — always guided by a search for authenticity, tension, and embodied truth."
    },
    {
        title: "Artistic Presence",
        description: "The dual foundation of rigorous physicality combined with dramatic depth has shaped her distinctive artistic presence, cultivation a refined sensitivity to the impact of movement within the frame."
    }
];

const staff = [
    {
        name: "Harry Wooster",
        position: "Guide",
        image: "/WhatsApp Image 2026-02-15 at 18.08.49 (1).jpeg"
    },
    {
        name: "Helen Marson",
        position: "Art Expert",
        image: "/WhatsApp Image 2026-02-15 at 18.08.49 (2).jpeg"
    },
    {
        name: "Brian Long",
        position: "Coordinator",
        image: "/WhatsApp Image 2026-02-15 at 18.08.50 (1).jpeg"
    }
];

export default function AboutPage() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [showCursor, setShowCursor] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const typedElement = useRef(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!typedElement.current) return;

        const typed = new Typed(typedElement.current, {
            strings: ['Atmosphere', 'Air', 'Sky'],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            showCursor: false
        });

        return () => typed.destroy();
    }, []);

    const handlePrev = () => {
        setCurrentSlide((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => Math.min(cards.length - 2, prev + 1));
    };

    const handleInteraction = (e) => {
        const clickX = e.clientX;
        const windowWidth = window.innerWidth;

        if (clickX < windowWidth / 2) handlePrev();
        else handleNext();
    };

    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <main className="bg-[#111111] min-h-screen w-full flex flex-col items-center pt-32 md:pt-40 lg:pt-48 pb-20 relative text-white">

            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 tracking-wide text-white text-4xl md:text-5xl lg:text-[57px] font-medium"
                style={{ fontFamily: "'Roc Grotesk', sans-serif", lineHeight: '1.1' }}
            >
                About
            </motion.h1>

            {/* About Section */}
            <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden mb-10">

                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full overflow-hidden"
                >
                    <img
                        src="/about new image coloured .jpeg"
                        alt="Lotte Aimée de Weert"
                        className="w-full h-auto object-cover flex"
                    />
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 bg-[#111111] relative z-10"
                >
                    <h2
                        className="text-white mb-8 lg:mb-14 z-10 lg:-ml-5 text-4xl md:text-5xl lg:text-[57px] font-medium"
                        style={{ fontFamily: "'Roc Grotesk', sans-serif", lineHeight: '1.1' }}
                    >
                        LOTTE AIMÉE de Weert
                    </h2>

                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 lg:mb-10 max-w-lg lg:pl-12 font-light">
                        Lotte Aimée de Weert is a dancer originally from the Netherlands...
                    </p>

                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 lg:mb-10 max-w-lg lg:pl-12 font-light">
                        Her career has led her to perform both on stage and in front of the camera...
                    </p>

                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 lg:mb-14 max-w-lg lg:pl-12 font-light">
                        Guided by her background in dance yet seeking multidisciplinary exchange...
                    </p>

                    {/* BUTTON UNCHANGED */}
                    <div className="lg:pl-12">
                        <Link
                            href="/about/biography"
                            className="inline-block bg-[#7a8208] hover:bg-[#6b7207] text-white font-semibold py-4 px-10 rounded-full transition-colors duration-300 shadow-lg"
                        >
                            About Us
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Biography Section */}
            <section className="w-full pt-16 pb-16 relative overflow-hidden">

                <div className="max-w-[1700px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-0">

                    <div className="lg:col-span-4 flex flex-col justify-start px-6 lg:pl-12 mb-12">
                        <h2
                            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white"
                            style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                        >
                            HER BIOGRAPHY
                        </h2>
                    </div>

                    <div
                        className="lg:col-span-8 relative"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => !isMobile && setShowCursor(true)}
                        onMouseLeave={() => setShowCursor(false)}
                        onClick={(e) => {
                            if (!isMobile && Math.abs(e.movementX) < 2) handleInteraction(e);
                        }}
                    >

                        <div className="overflow-hidden w-full">

                            <motion.div
                                className="flex gap-16 cursor-grab active:cursor-grabbing"
                                drag="x"
                                dragConstraints={{
                                    right: 0,
                                    left: -((cards.length - 2) * 424)
                                }}
                                dragElastic={0.1}
                                animate={{ x: isMobile ? `-${currentSlide * 85}%` : `-${currentSlide * 424}px` }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >

                                {cards.map((card, index) => (
                                    <div
                                        key={index}
                                        className="min-w-[85%] md:min-w-[420px] flex-shrink-0 flex flex-col group select-none"
                                    >

                                        <h3
                                            className="text-2xl font-semibold mb-4 tracking-tight"
                                            style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                        >
                                            {card.title}
                                        </h3>

                                        <p className="text-gray-400 leading-relaxed mb-6 text-base font-light max-w-[360px]">
                                            {card.description}
                                        </p>

                                        <div className="flex items-center text-[10px] font-bold tracking-[0.3em] uppercase text-white">
                                            Read More →
                                        </div>

                                    </div>
                                ))}

                            </motion.div>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}