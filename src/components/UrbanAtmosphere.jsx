'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function UrbanAtmosphere() {
    const slides = [
        {
            category: "Lotte & Ciela",
            title: "About",
            description: "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        },
        {
            category: "Lotte & Ciela",
            title: "About",
            description: "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.",
            image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2070&auto=format&fit=crop"
        },
        {
            category: "Lotte & Ciela",
            title: "About",
            description: "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.",
            image: "https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [showCursor, setShowCursor] = useState(false);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Track mouse position for custom cursor
    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
        setShowCursor(true);
    };

    const handleMouseLeave = () => {
        setShowCursor(false);
    };

    // Handle click on carousel area
    const handleCarouselClick = (e) => {
        const clickX = e.clientX;
        const windowWidth = window.innerWidth;

        if (clickX < windowWidth / 2) {
            prevSlide();
        } else {
            nextSlide();
        }
    };

    // Auto-play slider every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <section className="py-24 px-6 lg:px-12 bg-white flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
            {/* Custom Cursor */}
            {showCursor && (
                <div
                    className="custom-cursor"
                    style={{
                        left: `${cursorPosition.x}px`,
                        top: `${cursorPosition.y}px`,
                        opacity: showCursor ? 1 : 0
                    }}
                />
            )}

            <div
                className="max-w-[1400px] mx-auto w-full overflow-hidden custom-cursor-area"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleCarouselClick}
            >
                {/* Carousel Track - All slides in a row */}
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="min-w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                        >
                            {/* Left Side - Image */}
                            <div className="relative group overflow-hidden">
                                <div className="aspect-[4/3] relative w-full overflow-hidden bg-gray-100">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Right Side - Content */}
                            <div className="flex flex-col space-y-8">
                                <div className="space-y-4">
                                    <span className="text-sm font-bold tracking-[0.2em] text-black uppercase mb-8 block">
                                        {slide.category}
                                    </span>
                                    <h2
                                        className=""
                                        style={{
                                            fontFamily: "'Roc Grotesk', sans-serif",
                                            fontWeight: '500',
                                            fontSize: '47px',
                                            lineHeight: '48px',
                                            color: 'rgb(25, 25, 25)'
                                        }}
                                    >
                                        {slide.title}
                                    </h2>
                                </div>

                                <p
                                    className="max-w-lg"
                                    style={{
                                        fontFamily: "'Kumbh Sans', sans-serif",
                                        fontWeight: '400',
                                        fontSize: '16px',
                                        lineHeight: '28px',
                                        color: 'rgb(121, 124, 127)'
                                    }}
                                >
                                    {slide.description}
                                </p>

                                <div className="flex items-center space-x-12 pt-8">
                                    <button className="group flex items-center space-x-3 text-black font-bold text-lg transition-colors">
                                        <span className="transition-all">Read More</span>

                                        {/* Clean Arrow with Hover Animation */}
                                        <svg
                                            width="60"
                                            height="20"
                                            viewBox="0 0 60 20"
                                            className="overflow-visible transition-all duration-300 group-hover:translate-x-3"
                                            style={{ minWidth: '60px' }}
                                        >
                                            <line
                                                x1="0"
                                                y1="10"
                                                x2="45"
                                                y2="10"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                className="transition-all duration-300 text-black group-hover:text-[#802a2a] group-hover:scale-x-125"
                                                style={{
                                                    transformOrigin: 'left center',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            />
                                            <path
                                                d="M 38 4 L 48 10 L 38 16"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-all duration-300 text-black group-hover:text-[#802a2a] group-hover:translate-x-3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
