'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function LatestNews() {
    const scrollRef = useRef(null);
    const newsItems = [
        {
            title: "Why using scale in nature photography is so important",
            image: "/WhatsApp Image 2026-02-15 at 18.08.49.jpeg",
            date: "March 30, 2020",
            comments: "0 Comments"
        },
        {
            title: "Steps for stunning night landscape photography",
            image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop",
            date: "March 30, 2020",
            comments: "0 Comments"
        },
        {
            title: "When to use black & white photography",
            image: "/WhatsApp Image 2026-02-15 at 18.08.49.jpeg",
            date: "March 30, 2020",
            comments: "0 Comments"
        },
        {
            title: "How to use focus peaking for maximum sharpness",
            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=1000&auto=format&fit=crop",
            date: "March 30, 2020",
            comments: "0 Comments"
        },
        {
            title: "The lost art of shooting black-and-white photos",
            image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1000&auto=format&fit=crop",
            date: "March 30, 2020",
            comments: "0 Comments"
        },
        {
            title: "Creative landscape photography tips & techniques",
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop",
            date: "March 30, 2020",
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
                    className="text-[45px] md:text-[70px] font-bold text-center mb-12 tracking-tight text-black"
                    style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                >
                    Latest News
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
                                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 grayscale"
                                    />
                                </div>

                                {/* Content */}
                                <div className="space-y-2">
                                    <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-800">
                                        PHOTOGRAPHY
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
