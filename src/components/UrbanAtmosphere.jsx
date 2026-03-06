'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import HoverEffect from './HoverEffect';

export default function UrbanAtmosphere() {
    const slides = [
        {
            category: "Lotte & Ciela",
            title: "About",
            description: "Lotte Aimée de Weert is a Dutch choreographer and performer based in Paris. Trained in ballet, contemporary dance, and Method Acting, she creates work that blends physical intensity with emotional depth.",
            image1: "/aboutimg.jpeg",
            image2: "/gallery1.jpeg",
            hoverImage: "/gallery2.jpeg"
        },
        {
            category: "Lotte & Ciela",
            title: "About",
            description: "Lotte Aimée de Weert is a Dutch choreographer and performer based in Paris. Trained in ballet, contemporary dance, and Method Acting, she creates work that blends physical intensity with emotional depth.",
            image1: "/gallery1.jpeg",
            image2: "/gallery4.jpeg",
            hoverImage: "/gallery.3.jpeg"
        },
        {
            category: "Lotte & Ciela",
            title: "About",
            description: "Lotte Aimée de Weert is a Dutch choreographer and performer based in Paris. Trained in ballet, contemporary dance, and Method Acting, she creates work that blends physical intensity with emotional depth.",
            image1: "/gallery4.jpeg",
            image2: "/gallery5.jpeg",
            hoverImage: "/gallery6.jpeg"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
        <section className="py-8 md:py-12 lg:py-16 px-6 lg:px-12 bg-white flex flex-col items-center justify-center relative overflow-hidden">
            <div
                className="max-w-[1800px] mx-auto w-full overflow-hidden"
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
                            className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start md:items-center"
                        >
                            {/* Two images with gap and individual hover effects */}
                            <div
                                className="relative grid grid-cols-2 gap-2 sm:gap-4 md:gap-5 mb-8 md:mb-0 z-20 pointer-events-auto"
                            >
                                <div className="aspect-[3/4] sm:aspect-[4/5] relative w-full overflow-hidden bg-gray-100 distortion border-[0.5px] border-black/10">
                                    <HoverEffect
                                        image1={slide.image1}
                                        image2={slide.hoverImage}
                                        displacementImage="/dis.png/diss.png"
                                        isHovered={null}
                                        intensity={0.2}
                                        speedIn={1.2}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="aspect-[3/4] sm:aspect-[4/5] relative w-full overflow-hidden bg-gray-100 distortion border-[0.5px] border-black/10">
                                    <HoverEffect
                                        image1={slide.image2}
                                        image2={slide.hoverImage}
                                        displacementImage="/dis.png/diss.png"
                                        isHovered={null}
                                        intensity={0.2}
                                        speedIn={1.2}
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col space-y-5 md:space-y-6 intro px-2 md:px-0">
                                <div className="space-y-2 md:space-y-3">
                                    <span className="text-sm font-bold tracking-[0.2em] text-black uppercase mb-3 md:mb-5 block">
                                        {slide.category}
                                    </span>
                                    <h2
                                        className="text-3xl md:text-[50px]"
                                        style={{
                                            fontFamily: "'Roc Grotesk', sans-serif",
                                            fontWeight: '500',
                                            color: 'rgb(25, 25, 25)',
                                            lineHeight: '1.1',
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
                                        color: 'rgb(121, 124, 127)',
                                        fontSize: '16px',
                                        lineHeight: '28px'
                                    }}
                                >
                                    {slide.description}
                                </p>

                                <div className="flex items-center space-x-12 pt-4 md:pt-6">
                                    <Link
                                        href="/about"
                                        onClick={(e) => e.stopPropagation()}
                                        className="group flex items-center space-x-3 text-black font-bold text-lg transition-colors"
                                    >
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
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile-only Slide Indicators */}
            <div className="flex md:hidden space-x-2 mt-8">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1.5 transition-all duration-300 rounded-full ${currentSlide === index ? 'w-8 bg-black' : 'w-2 bg-gray-300'
                            }`}
                    />
                ))}
            </div>

        </section>
    );
}
