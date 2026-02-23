'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function WhatWeOffer() {
    const typedElement = useRef(null);

    useEffect(() => {
        if (!typedElement.current) return;

        const typed = new Typed(typedElement.current, {
            strings: ['atmosphere', 'Air', 'Sky'],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            showCursor: false
        });

        return () => typed.destroy();
    }, []);

    const services = [
        {
            title: "Projects",
            href: "/projects",
            description: "Multidisciplinary Performances",
            image: "https://images.unsplash.com/photo-1554941068-a252680d25d9?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Schedule",
            href: "/schedule",
            description: "Artistic Agenda",
            image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "About me",
            href: "/about",
            description: "Choreographic Language",
            image: "https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Contact",
            href: "/contact",
            description: "Work Together",
            image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <section className="relative bg-white pt-24 pb-0">
            {/* Top Content */}
            <div className="max-w-[1000px] mx-auto text-center px-6 mb-20">
                <span className="text-xs font-bold tracking-[0.3em] text-black uppercase block mb-8">
                    What I offer
                </span>

                <h2
                    className="mb-10"
                    style={{
                        fontFamily: "'Roc Grotesk', sans-serif",
                        fontWeight: '500',
                        fontSize: '57px',
                        lineHeight: '61px',
                        color: 'rgb(25, 25, 25)'
                    }}
                >
                    I offer movement as language —
                    where precision meets emotion,
                    and each performance becomes{" "}
                    <span
                        className="underline decoration-1 underline-offset-8"
                        ref={typedElement}
                    ></span>.
                </h2>


            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
                {services.map((service) => (
                    <Link
                        key={service.title}
                        href={service.href}
                        className="relative h-[480px] overflow-hidden group cursor-pointer border-r border-white/20 last:border-r-0 block"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:grayscale-0 transition-all duration-700"
                        />

                        <div className="absolute inset-0 bg-[#802121]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                        <div className="absolute bottom-6 left-10 text-white z-20 transition-transform duration-300 group-hover:-translate-y-4">
                            <h3
                                className="text-[32px] font-bold mb-2 leading-tight"
                                style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                            >
                                {service.title}
                            </h3>

                            <p className="text-[14px] opacity-80 font-medium mb-6">
                                {service.description}
                            </p>

                            {/* Arrow Icon */}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
