'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function LatestNews() {
    const [isMobile, setIsMobile] = useState(false);
    const scrollRef = useRef(null);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const newsItems = [
        {
            title: "Performance at the Dutch National Opera",
            image: "/Lotte_AlexConu_112.jpg",
            date: "February 2026",
            comments: "0 Comments"
        },
        {
            title: "CIE.LA New Research Residencies",
            image: "/IMG_3004 New (1).jpg",
            date: "January 2026",
            comments: "0 Comments"
        },
        {
            title: "Collaboration with Valentino Fashion House",
            image: "/gallerie1 New.jpg",
            date: "December 2025",
            comments: "0 Comments"
        },
        {
            title: "Movement Workshop in Paris Studio",
            image: "/IMG_3749.JPG",
            date: "November 2025",
            comments: "0 Comments"
        },
        {
            title: "The Impact of Cinematic Language in Dance",
            image: "/IMG_3006 New (3).jpg",
            date: "October 2025",
            comments: "0 Comments"
        },
        {
            title: "Artistic Presence and Method Acting Study",
            image: "/IMG_3005 New (2).jpg",
            date: "September 2025",
            comments: "0 Comments"
        }
    ];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scroll = () => {
            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollContainer.scrollBy({ left: 350, behavior: 'smooth' });
            }
        };

        const intervalId = setInterval(scroll, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <h2
                    className="text-center mb-12 md:mb-20 tracking-tight"
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

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 lg:-mx-12 lg:px-12 hover:cursor-grab active:cursor-grabbing"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {newsItems.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] max-w-[300px] md:min-w-[350px] md:max-w-[350px] snap-start group flex-shrink-0"
                        >
                            <Link href="#" className="block">
                                {/* Image Container */}
                                <div className="aspect-[3/2] w-full overflow-hidden mb-4 relative bg-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="space-y-2">
                                    <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-800">
                                        ART & MOVEMENT
                                    </div>
                                    <h3
                                        className="text-[18px] leading-[1.3] font-bold text-black group-hover:text-gray-600 transition-colors"
                                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                    >
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-[11px] text-gray-500 pt-1">
                                        <span>{item.date}</span>
                                        <span>•</span>
                                        <span>{item.comments}</span>
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
