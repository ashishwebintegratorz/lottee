'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function SchedulePage() {
    const events = [
        {
            id: 1,
            date: '12 MAR',
            title: 'Embodied Silence',
            location: 'La Ménagerie de Verre, Paris',
            description: 'A contemporary solo exploring tension, breath, and suspended physicality through a cinematic choreographic language.',
            type: 'Performance',
            time: '8:00 PM'
        },
        {
            id: 2,
            date: '25 - 28 APR',
            title: 'Movement & Frame Residency',
            location: 'Centre National de la Danse, Pantin',
            description: 'Research residency focusing on the dialogue between body, camera, and architectural space.',
            type: 'Residency',
            time: 'Closed Sessions'
        },
        {
            id: 3,
            date: '10 MAY',
            title: 'Fashion Movement Collaboration',
            location: 'Paris Fashion Week',
            description: 'Live performance collaboration integrating choreographic presence within a couture runway presentation.',
            type: 'Collaboration',
            time: 'Private Event'
        },
        {
            id: 4,
            date: '18 JUN',
            title: 'Intimate Duet Study',
            location: 'Studio Micadanses, Paris',
            description: 'A new duet work examining proximity, emotional restraint, and embodied narrative.',
            type: 'Work in Progress',
            time: '7:30 PM'
        },
        {
            id: 5,
            date: '02 - 05 OCT',
            title: 'CIE.LA Annual Creation',
            location: 'Paris',
            description: 'Premiere of the company’s latest multidisciplinary production blending dance, theatre, and visual storytelling.',
            type: 'Premiere',
            time: 'To Be Announced'
        }
    ];

    return (
        <main className="min-h-screen bg-[#1a1a1a] text-white pt-40 pb-24 overflow-hidden">
            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-5">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="mb-24 flex flex-col items-center text-center">
                    <motion.p
                        initial={{ opacity: 0, letterSpacing: '0.2em' }}
                        animate={{ opacity: 1, letterSpacing: '0.5em' }}
                        transition={{ duration: 1 }}
                        className="text-[#7a8208] text-[12px] uppercase font-bold mb-4"
                    >
                        Autumn / Winter 2026-25-24
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-6xl md:text-8xl font-bold tracking-tight mb-8"
                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                    >
                        Schedule
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 60 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-[2px] bg-[#7a8208]"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 text-gray-400 max-w-xl text-lg font-light leading-relaxed"
                    >
                        Join me across London's most iconic locations for exhibitions, private sessions, and exclusive masterclasses.
                    </motion.p>
                </div>

                {/* Timeline Section */}
                <div className="space-y-32">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col lg:flex-row gap-12 items-start"
                        >
                            {/* Date Column */}
                            <div className="lg:w-1/4">
                                <span className="text-sm uppercase tracking-[0.3em] font-bold text-[#7a8208]">
                                    {event.date}
                                </span>
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="w-[1px] h-12 bg-white/10" />
                                    <span className="text-[11px] uppercase tracking-widest text-white/40 italic">
                                        Confirmed
                                    </span>
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="lg:w-2/3 group">
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-start justify-between">
                                        <div className="space-y-3">
                                            <span className="inline-block px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] uppercase tracking-widest font-bold">
                                                {event.type}
                                            </span>
                                            <h2
                                                className="text-4xl md:text-5xl font-bold tracking-tight group-hover:text-[#7a8208] transition-colors duration-300"
                                                style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                            >
                                                {event.title}
                                            </h2>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
                                        {event.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#7a8208]">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                            </div>
                                            <div className="text-sm">
                                                <p className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Location</p>
                                                <p className="font-medium">{event.location}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#7a8208]">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                            </div>
                                            <div className="text-sm">
                                                <p className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Time</p>
                                                <p className="font-medium">{event.time}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        <Link
                                            href="/contact"
                                            className="text-[12px] font-bold uppercase tracking-[0.3em] inline-flex items-center gap-3 hover:text-[#7a8208] transition-colors"
                                        >
                                            Inquire & RSVP
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-40 pt-20 border-t border-white/5 text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>
                        Need a custom shooting schedule?
                    </h3>
                    <Link
                        href="/contact"
                        className="bg-[#7a8208] text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-[#6b7207] transition-all inline-block hover:scale-105 active:scale-95 shadow-xl"
                    >
                        Inquire & Collaborate

                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
