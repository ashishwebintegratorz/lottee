'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Choreographer & Dancer', href: '/projects' },
        { name: 'Gallery', href: '/photography' },
        { name: 'Schedule', href: '/schedule' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const socialLinks = [
        { name: 'Facebook', icon: 'facebook' },
        { name: 'Twitter', icon: 'twitter' },
        { name: 'Dribble', icon: 'globe' },
        { name: 'Instagram', icon: 'instagram' },
    ];

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const pathname = usePathname();
    const isDarkPage = pathname.startsWith('/about');
    const isHomePage = pathname === '/';
    const isContactPage = pathname === '/contact';
    const isProjectsPage = pathname === '/projects';
    const isSchedulePage = pathname === '/schedule';
    const isChoreographerPage = pathname === '/choreographer';
    const isPhotographyPage = pathname === '/photography';

    const contactNavLinks = [...navLinks];

    const currentNavLinks = isContactPage ? contactNavLinks : navLinks;

    return (
        <>
            <nav className={`absolute top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${(isProjectsPage || isSchedulePage || isChoreographerPage || isPhotographyPage) ? 'bg-[#1a1a1a] border-transparent' :
                (isDarkPage || isContactPage) ? 'bg-[#111111] border-transparent' :
                    'bg-white border-gray-200'
                }`}>
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-10 xl:px-12">
                    <div className="flex items-center justify-between h-20 md:h-24 lg:h-26">
                        {/* Logo */}
                        <Link href="/" className="flex items-center xl:-ml-10 group cursor-pointer">
                            <span
                                className={`text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] xl:text-[32px] font-bold tracking-tight transition-all duration-300 group-hover:opacity-70 ${(isDarkPage || isContactPage || isProjectsPage || isSchedulePage || isChoreographerPage || isPhotographyPage) ? 'text-white' : 'text-black'}`}
                                style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                            >
                                LOTTE AIMÉE
                            </span>
                        </Link>

                        <div className="absolute left-1/2 transform -translate-x-1/2 hidden xl:flex items-center gap-8">
                            <div className="flex items-center gap-4 xl:gap-8">
                                {currentNavLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="relative transition-colors duration-200 group whitespace-nowrap"
                                        style={{
                                            fontFamily: "'Roc Grotesk', sans-serif",
                                            fontSize: '15px',
                                            fontWeight: '500',
                                            color: (isDarkPage || isContactPage || isProjectsPage || isSchedulePage || isChoreographerPage || isPhotographyPage) ? '#FFFFFF' : 'rgb(25, 25, 25)',
                                            lineHeight: '29px'
                                        }}
                                    >
                                        {link.name}
                                        <span className={`absolute left-0 bottom-[-4px] h-[2px] transition-all duration-300 ${((link.name === 'Contact' && isContactPage) ||
                                            (link.name === 'Schedule' && isSchedulePage) ||
                                            (link.name === 'Photography' && isPhotographyPage) ||
                                            (link.name === 'Choreographer & Dancer' && isProjectsPage) ||
                                            (link.name === 'Home' && isHomePage) ||
                                            (link.name === 'About' && isDarkPage))
                                            ? 'w-full bg-current opacity-100'
                                            : `w-0 group-hover:w-full ${(isDarkPage || isContactPage || isProjectsPage || isSchedulePage || isChoreographerPage || isPhotographyPage) ? 'bg-white' : 'bg-[#191919]'}`}`}></span>
                                    </Link>
                                ))}
                            </div>


                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-4">
                            {/* Let's Talk Button - Hidden on Home and Contact */}
                            {!isHomePage && !isContactPage && (
                                <Link
                                    href="/contact"
                                    className="hidden lg:flex items-center justify-center bg-[#7a8208] text-white font-bold px-8 py-3 rounded-full hover:bg-[#6b7207] transition-all text-sm tracking-wide"
                                >
                                    {"Let's Talk"}
                                </Link>
                            )}

                            {/* Hamburger Menu Button - Shown on Home Right per image, Mobile/Tablet only on others */}
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className={`${isHomePage ? 'flex' : 'xl:hidden'} flex flex-col gap-[7px] w-10 h-10 justify-center items-center cursor-pointer group`}
                                aria-label="Open menu"
                            >
                                <span className={`w-7 h-[2.5px] transition-all duration-300 ${(isDarkPage || isContactPage || isProjectsPage || isSchedulePage || isChoreographerPage || isPhotographyPage) ? 'bg-white' : 'bg-black'}`}></span>
                                <span className={`w-4 h-[2.5px] transition-all duration-300 ${(isDarkPage || isContactPage || isProjectsPage || isSchedulePage || isChoreographerPage || isPhotographyPage) ? 'bg-white' : 'bg-black'}`}></span>
                                <span className={`w-7 h-[2.5px] transition-all duration-300 ${(isDarkPage || isContactPage || isProjectsPage || isSchedulePage || isChoreographerPage || isPhotographyPage) ? 'bg-white' : 'bg-black'}`}></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Slide-out Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        key="menu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }} // Match total exit time
                        className="fixed inset-0 z-[90] bg-black/60"
                    >
                        {/* Transparent Layer for click-outside */}
                        <div
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute inset-0 bg-transparent"
                        />

                        {/* Sidebar Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={isMobile ? { y: '-100%', x: 0 } : { x: '100%' }}
                            transition={{
                                duration: 0.2, // Extremely slow exit
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="absolute right-0 top-0 bottom-0 w-full sm:max-w-[360px] bg-[#111111] flex flex-col shadow-2xl overflow-hidden"
                        >
                            {/* Menu Header with Close Button */}
                            <div className="flex justify-between items-center px-8 pt-8 pb-4">
                                <span
                                    className="text-[20px] md:text-[24px] font-bold tracking-tight text-white"
                                    style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                >
                                    Lotte Aimée
                                </span>
                                <motion.button
                                    initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                    exit={{ rotate: 540, scale: 0, opacity: 0 }}
                                    whileHover={{ rotate: 90, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{
                                        duration: 0.4, // Faster rotation
                                        ease: "easeInOut"
                                    }}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </motion.button>
                            </div>

                            {/* Menu Content */}
                            <div
                                className="flex-1 flex flex-col px-8 py-8 overflow-y-auto scrollbar-hide"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                {/* Nav Links */}
                                <motion.div
                                    className="space-y-4 flex flex-col text-left mt-4"
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={{
                                        open: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
                                        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                                    }}
                                >
                                    {currentNavLinks.map((link, idx) => (
                                        <motion.div
                                            key={link.name}
                                            variants={{
                                                open: { x: 0, opacity: 1 },
                                                closed: { x: 30, opacity: 0 }
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="group flex items-center justify-start gap-4 text-white text-[24px] md:text-[32px] font-bold tracking-tight transition-all hover:pl-2"
                                                style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                            >
                                                <span className="relative">
                                                    {link.name}
                                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#7a8208] transition-all duration-500 group-hover:w-full"></span>
                                                </span>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Footer Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                                    className="pt-12 mt-auto border-t border-white/10"
                                >
                                    <div className="mb-10">
                                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 block mb-4">
                                            Based in
                                        </span>
                                        <p className="text-white text-lg font-medium">Paris, France</p>
                                    </div>

                                    <div className="flex flex-col space-y-4">

                                        <div className="flex items-center gap-4">
                                            <a
                                                href="https://instagram.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                                            >
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
