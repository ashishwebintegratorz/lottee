'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Typed from 'typed.js';

const cards = [
    {
        title: "Her Choreographic Language",
        description: "Rooted in her Dutch origins and artistically shaped by Paris, Lotte desenvolves a movement language that bridges physical intensity with emotional precision. My work is informed by theatrical depth, cinematic awareness, and a refined technical clarity.",
        image: "/gallery2.jpeg"
    },
    {
        title: "Fashion & Narrative",
        description: "A versatile performer, she moves seamlessly between dance, theatre, and fashion. I have performed in shows and presentations for major fashion houses including Valentino, Cartier, Hermès, and Flora Miranda — sharpening her understanding of narrative embodiment.",
        image: "/imggl1.jpeg"
    },
    {
        title: "Choreographic Research",
        description: "Her research explores the relationship between body, space, and storytelling — moving fluidly from intimate solos to collaborative stage works — always guided by a search for authenticity, tension, and embodied truth.",
        image: "/urben22.jpg"
    },
    {
        title: "Artistic Presence",
        description: "The dual foundation of rigorous physicality combined with dramatic depth has shaped her distinctive artistic presence, cultivation a refined sensitivity to the impact of movement within the frame.",
        image: "/urben5.jpeg"
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
    // WhoWeAre Logic
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
        if (clickX < windowWidth / 2) {
            handlePrev();
        } else {
            handleNext();
        }
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
                style={{
                    fontFamily: "'Roc Grotesk', sans-serif",
                    lineHeight: '1.1',
                }}
            >
                About
            </motion.h1>

            <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden mb-10">
                {/* Left Side - Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full overflow-hidden"
                >
                    <img
                        src="/about new image coloured .jpeg"
                        alt="Lotte Aimée de Weert"
                        className="w-full h-auto object-cover flex"
                    />
                </motion.div>

                {/* Right Side - Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 bg-[#111111] relative z-10"
                >
                    <h2
                        className="text-white mb-8 lg:mb-14 z-10 lg:-ml-43 text-4xl md:text-5xl lg:text-[57px] font-medium"
                        style={{
                            fontFamily: "'Roc Grotesk', sans-serif",
                            lineHeight: '1.1',
                        }}
                    >
                        Lotte Aimée de Weert
                    </h2>

                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 lg:mb-10 max-w-lg lg:pl-12 font-light">
                        Lotte Aimée de Weert is a dancer originally from the Netherlands. Trained at the ArtEZ University of the Arts in Arnhem, she later moved to Paris where she further developed her dance practice through various techniques: classical ballet, contemporary dance, and the Graham technique. At the same time, she deepened her approach to performance by studying Method Acting with Jack Waltzer, a long-standing member of the Actors Studio in New York.
                    </p>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 lg:mb-10 max-w-lg lg:pl-12 font-light">
                        Her career has led her to perform both on stage and in front of the camera. This dual experience has nurtured her interest in the impact of movement within the image, as well as in the dialogue between dance and other artistic disciplines.
                    </p>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 lg:mb-14 max-w-lg lg:pl-12 font-light">
                        Guided by her background in dance yet seeking multidisciplinary exchange, she develops her own projects within her association CIELA, which has received support by the Centre National de la Danse and Ménagerie de Verre in Paris. Alongside this work, she continues to collaborate on various dance projects. She has performed in presentations for fashion houses such as Valentino, Cartier, and Flora Miranda, and regularly works with the Dutch National Opera. In parallel, she also teaches the GYROTONIC® Method, sharing her approach to movement and body awareness.
                    </p>


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

            {/* Who We Are Section (Inlined) */}
            <section className="w-full pt-16 pb-16 relative overflow-hidden">
                {/* Custom Cursor */}
                {showCursor && (
                    <div
                        className="custom-cursor fixed pointer-events-none z-[9999]"
                        style={{
                            left: `${cursorPosition.x}px`,
                            top: `${cursorPosition.y}px`,
                            opacity: showCursor ? 1 : 0,
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'white',
                            color: 'black'
                        }}
                    />
                )}

                <div className="max-w-[1700px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Left Side - Title */}
                    <div className="lg:col-span-4 flex flex-col justify-start min-h-[100px] lg:min-h-[400px] px-6 lg:pl-12 mb-12 lg:mb-0">
                        <h2
                            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white"
                            style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                        >
                            HER BIOGRAPHY
                        </h2>
                    </div>

                    {/* Right Side - Carousel */}
                    <div
                        className="lg:col-span-8 md:cursor-none relative"
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
                                    left: -((cards.length - 2) * 424) // 360px card + 64px gap
                                }}
                                dragElastic={0.1}
                                onDragEnd={(e, info) => {
                                    const threshold = 50;
                                    if (info.offset.x < -threshold) {
                                        handleNext();
                                    } else if (info.offset.x > threshold) {
                                        handlePrev();
                                    }
                                }}
                                animate={{ x: isMobile ? `-${currentSlide * 85}%` : `-${currentSlide * 424}px` }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {cards.map((card, index) => (
                                    <div
                                        key={index}
                                        className="min-w-[85%] md:min-w-[420px] flex-shrink-0 flex flex-col group select-none"
                                    >
                                        {/* Text Content */}
                                        <div className="flex-1 mb-4">
                                            <h3
                                                className="text-2xl font-semibold mb-4 tracking-tight"
                                                style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                            >
                                                {card.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed mb-6 text-base font-light max-w-[360px]">
                                                {card.description}
                                            </p>

                                            {/* Read More & Small Arrow - Unified Slide Animation */}
                                            <div className="relative flex items-center h-8 cursor-pointer group/btn overflow-hidden">
                                                <div className="flex items-center transition-transform duration-500 ease-in-out -translate-x-[90px] group-hover:translate-x-0">
                                                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white pr-4">
                                                        Read More
                                                    </span>
                                                    <svg
                                                        width="24"
                                                        height="8"
                                                        viewBox="0 0 24 8"
                                                        fill="none"
                                                        className="text-white"
                                                    >
                                                        <path
                                                            d="M0 4H22M22 4L18 1M22 4L18 7"
                                                            stroke="currentColor"
                                                            strokeWidth="1.2"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Image */}
                                        <div className="aspect-[4/5] w-full overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out bg-[#111111]">
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                fill
                                                className="object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 768px) 85vw, 360px"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="relative bg-[#121212] pt-10 pb-32 w-full text-white">
                <div className="max-w-[1000px] mx-auto text-center px-6">
                    <span className="text-xs font-bold tracking-[0.3em] text-white uppercase block mb-8">
                        My Creations
                    </span>

                    <h2
                        className="mb-10 text-white text-3xl md:text-5xl lg:text-[50px] font-medium"
                        style={{
                            fontFamily: "'Roc Grotesk', sans-serif",
                            lineHeight: '1.2',
                        }}
                    >
                        Multidisciplinary Projects through my association CIE.LA,
                        where choreography meets conceptual research and{" "}
                        <span
                            className="underline decoration-1 underline-offset-[12px]"
                            ref={typedElement}
                        ></span>.
                    </h2>

                    {/* Author Signature */}
                    <div className="mt-16 flex flex-col items-center">
                        <span className="text-white font-bold text-lg tracking-wide mb-1" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>
                            Lotte Aimée de Weert
                        </span>
                        <span className="text-gray-400 text-sm tracking-widest uppercase font-medium">
                            Artist & Choreographer
                        </span>
                    </div>
                </div>
            </section>

            {/*  {/* Our Staff Section */}
            {/*
<section className="w-full bg-[#0f0f0f] py-32 px-6 lg:px-12 text-white">
    <div className="max-w-[1240px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 items-end mb-20">
            <div className="lg:col-span-1">
                <h2
                    className="text-4xl md:text-6xl font-semibold tracking-tight"
                    style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                >
                    Our Staff
                </h2>
            </div>

            <div className="lg:col-span-2 lg:pl-12">
                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                    Today, she works as a freelance artist, collaborating on dance and theatre productions while continuing to choreograph and develop her own original pieces.
                </p>
            </div>

            <div className="lg:col-span-1 flex justify-end items-center">
                <div className="flex items-center group cursor-pointer">
                    <span className="text-sm font-bold tracking-widest uppercase mr-3">
                        View More
                    </span>

                    <div className="relative overflow-hidden w-6 h-4">

                        <svg
                            width="24"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="absolute left-0 transition-transform duration-500 ease-in-out group-hover:translate-x-8 text-white"
                        >
                            <path d="M5 12H19M19 12L12 5M19 12L12 19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <svg
                            width="24"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="absolute -left-8 transition-transform duration-500 ease-in-out group-hover:translate-x-8 text-white"
                        >
                            <path d="M5 12H19M19 12L12 5M19 12L12 19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {staff.map((member, index) => (
                <motion.div
                    key={index}
                    className="flex flex-col group w-full cursor-pointer"
                    initial="initial"
                    whileHover="hover"
                >

                    <div className="aspect-[4/5] md:aspect-[3.8/4.6] overflow-hidden relative mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 380px"
                        />
                    </div>

                    <h3
                        className="text-2xl font-semibold mb-2"
                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                    >
                        {member.name}
                    </h3>

                    <p className="text-gray-400 uppercase tracking-widest text-xs font-medium mb-6">
                        {member.position}
                    </p>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition-colors"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                        </svg>
                    </a>

                </motion.div>
            ))}
        </div>

    </div>
</section>
*/}

        </main>
    );
}
