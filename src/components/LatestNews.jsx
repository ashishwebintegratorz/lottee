'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function LatestNews() {
    const [isMobile, setIsMobile] = useState(false);
    const [expandedItems, setExpandedItems] = useState({});

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleExpand = (e, index) => {
        e.preventDefault();
        e.stopPropagation();
        setExpandedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const newsItems = [
        {
            category: "Creation",
            title: "Creation - Ma Valse d’aujourd’hui",
            description: "Menagerie de Verre - April 2026 - Accueil studio",
            image: "/latest1.jpeg",
            date: "April 2026",
            href: "/schedule"
        },
        {
            category: "GYROTONIC®",
            title: "GYROTONIC® CLASSES",
            description: "I Help My Clients Build Healthy Movement Habits, Feel Better In Their Bodies, And Discover What Truly Works For Them Through The Gyrotonic®️ Method. As a professional dancer, I discovered the GYROTONIC® Method and found a truly transformative way of working with my body. It taught me to move with greater intelligence, efficiency, and sustainability — preventing injuries while allowing me to explore and expand my physical potential. I completed my Level 1 Foundation Course in February 2025 at Centre Uma in Paris, and I’m now offering GYROTONIC® sessions in Paris. I work with clients from diverse backgrounds — but also performers — helping them enhance their physical condition, refine their movement quality, and deepen their body awareness. The GYROTONIC EXPANSION SYSTEM® is a holistic approach to wellness, using spiraling, circular movements to create balance, efficiency, and flexibility. It is a system designed to re-educate the body’s movement patterns, decompress the skeletal structure, and create a state of balanced, functional strength.",
            image: "/latest2.jpeg",
            date: "February 2025",
            href: "/contact"
        },
        {
            category: "Research",
            title: "Dance research",
            description: "Since 2019 I exchange with Christine Kono-Pohlmann and Dimitris Kraniotis, and joining them regularly in their dance research.",
            image: "/latest3.jpeg",
            date: "Ongoing",
            href: "/projects"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <h2
                    className="text-center mb-16 md:mb-24 tracking-tight"
                    style={{
                        fontFamily: "'Roc Grotesk', sans-serif",
                        fontWeight: 500,
                        fontSize: isMobile ? '26px' : '57px',
                        lineHeight: isMobile ? '30px' : '61px',
                        color: 'rgb(25, 25, 25)',
                        fontStyle: 'normal'
                    }}
                >
                    Work & Latest News
                </h2>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {newsItems.map((item, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[calc(50%-1rem)] lg:w-[320px] group flex-shrink-0"
                        >
                            <Link href={item.href || "#"} className="block h-full group">
                                {/* Image Container */}
                                <div className="w-full aspect-square overflow-hidden mb-5 relative bg-white rounded-sm">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain block transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#7a8208]">
                                        {item.category}
                                    </div>
                                    <h3
                                        className="text-[20px] leading-[1.2] font-bold text-black group-hover:text-[#7a8208] transition-colors"
                                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                    >
                                        {item.title}
                                    </h3>

                                    <div className="relative">
                                        <p className={`text-[14px] leading-relaxed text-gray-600 transition-all duration-500 ${expandedItems[index] ? '' : 'line-clamp-5'}`}>
                                            {item.description}
                                        </p>

                                        {item.description.length > 200 && (
                                            <button
                                                onClick={(e) => toggleExpand(e, index)}
                                                className="mt-2 flex items-center gap-1 text-[#7a8208] text-[12px] font-bold uppercase tracking-wider hover:translate-y-0.5 transition-transform"
                                            >
                                                {expandedItems[index] ? 'Show Less' : 'Read More'}
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    className={`transition-transform duration-300 ${expandedItems[index] ? 'rotate-180' : ''}`}
                                                >
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-2 text-[11px] text-gray-400 pt-2 font-medium italic border-t border-gray-100 w-fit">
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
