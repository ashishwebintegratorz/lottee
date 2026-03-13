'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function SchedulePage() {
    const [expandedEvents, setExpandedEvents] = useState({});

    const toggleEvent = (id) => {
        setExpandedEvents(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const events = [
        {
            id: 1,
            date: ' OCT 2026',
            title: 'MA VALSE D\'AUJOURD\'HUI',
            location: 'PARIS-LOCATION TBC',
            description: 'Ma Valse d\'aujourd\'hui is a choreographic duet. The project is inspired by the sculpture of Camille Claudel\'s Waltz, not to offer a transposition, but to explore its meaning. We question the intentions behind her gestures and the emotional force, The Waltz embodies both fragility and strength— remaining alive beyond the material form through two bodies in today\'s context. ',
            type: 'Performance',
            time: '7:00 PM'
        },
        /* {
             id: 2,
             date: 'March 2027',
             title: 'MA VALSE D\'AUJOURD\'HUI',
             location: 'Museum Maison Claudel-Villeneuve-sur-F`ere, France',
             description: 'This project a choreographic exploration inspired by Camille Claudel\'s\'work\'La Vaise. it translates the emotional movements of the sculpture into a living physical language. Through two performers, the piece explores themes of connection, memory, and desire. the body becomes a space where pastand present meet.   ',
             type: 'Performance',
             time: '7:00 PM'
         },
         // {
         //     id: 3,
         //     date: '10 MAY',
         //     title: 'Fashion Movement Collaboration',
         //     location: 'Paris Fashion Week',
         //     description: 'Live performance collaboration integrating choreographic presence within a couture runway presentation.',
         //     type: 'Collaboration',
         //     time: 'Private Event'
         // },
         // {
         //     id: 4,
         //     date: '18 JUN',
         //     title: 'Intimate Duet Study',
         //     location: 'Studio Micadanses, Paris',
         //     description: 'A new duet work examining proximity, emotional restraint, and embodied narrative.',
         //     type: 'Work in Progress',
         //     time: '7:30 PM'
         // },
         // {
         //     id: 5,
         //     date: '02 - 05 OCT',
         //     title: 'CIE.LA Annual Creation',
         //     location: 'Paris',
         //     description: 'Premiere of the company’s latest multidisciplinary production blending dance, theatre, and visual storytelling.',
         //     type: 'Premiere',
         //     time: 'To Be Announced'
         // }*/
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
                        Schedule 2026
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
                        Please see my upcoming works for 2026. I am currently developing one piece that will be presented in two different locations.
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

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                                        <div className="flex items-center">
                                            <button
                                                onClick={() => toggleEvent(event.id)}
                                                className="text-[12px] font-bold uppercase tracking-[0.3em] inline-flex items-center gap-3 hover:text-[#7a8208] transition-colors focus:outline-none"
                                            >
                                                More info & BUY TICKET
                                                <motion.svg
                                                    animate={{ rotate: expandedEvents[event.id] ? 90 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                                >
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </motion.svg>
                                            </button>
                                        </div>
                                        <div className="flex items-center">
                                            <Link
                                                href="/donate"
                                                className="text-[12px] font-bold uppercase tracking-[0.3em] underline decoration-1 underline-offset-4 hover:text-[#7a8208] transition-colors"
                                            >
                                                DONATE
                                            </Link>
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {expandedEvents[event.id] && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-8 mt-4 border-t border-white/5 flex flex-col items-start gap-8 relative z-10 w-full pr-4 md:pr-12">
                                                    <div style={{
                                                        fontFamily: "'Roc Grotesk', sans-serif",
                                                        fontStyle: "normal",
                                                        fontWeight: 300,
                                                        color: "lab(65.9269 -0.832707 -8.17474)",
                                                        fontSize: "18px",
                                                        lineHeight: "29px"
                                                    }} className="space-y-6">
                                                        <p>
                                                            This project arises from a deep impulse: to pay tribute to the women who have inspired and nourished me throughout my life as a female artist. Camille Claudel holds an essential place in my research and creative process. Her work has led me to question the intentions that guided her gestures, particularly in the sculpture La Valse.
                                                        </p>
                                                        <p>
                                                            This work carries within it both fragility and strength, an eternal movement. The emotion it holds reveals itself to those who look at it, without ever imposing itself or becoming fixed within the material.
                                                        </p>
                                                        <p>
                                                            It inspired me to physically explore the continuity of this work, allowing my body to be crossed by what she sought to express beyond the material.
                                                        </p>
                                                        <p>
                                                            My waltz today does not illustrate Claudel’s work directly; rather, it reflects on connection, power, desire, surrender, and memory in relation to the other. These notions nourish the research of movement, in direct dialogue with the universe of Camille Claudel, which serves as the anchoring point of the piece. Two performers embody this exploration through different choreographic structures.
                                                        </p>
                                                        <p>
                                                            The stage becomes a space of resonance where the body waltzes between past and present, like an inner dance that constantly reinvents itself.
                                                        </p>
                                                        <p>
                                                            In this project, I seek to use the body as a place of memory, a sensitive material marked by shared stories. It is an important exploration within my path as a creator—one that leads toward a collective understanding and meaningful dialogue, where I aim to create a language that exists beyond time.
                                                        </p>
                                                    </div>

                                                    <Link
                                                        href="/contact"
                                                        className="bg-[#7a8208] text-white px-10 py-4 rounded-full text-sm font-bold hover:bg-[#6b7207] transition-all inline-block hover:scale-105 active:scale-95 shadow-lg uppercase tracking-[0.2em] mt-4"
                                                    >
                                                        BUY TICKETS
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
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
