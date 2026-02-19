'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1100);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
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

    const contactNavLinks = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'Schedule', href: '/schedule' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const currentNavLinks = isContactPage ? contactNavLinks : navLinks;

    return (
        <>
            <nav className={`absolute top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${(isProjectsPage || isSchedulePage) ? 'bg-[#1a1a1a] border-transparent' :
                (isDarkPage || isContactPage) ? 'bg-[#111111] border-transparent' :
                    'bg-white border-gray-200'
                }`}>
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-28">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <span
                                className={`text-[36px] font-bold tracking-tight transition-colors duration-300 ${(isDarkPage || isContactPage || isProjectsPage || isSchedulePage) ? 'text-white' : 'text-black'}`}
                                style={{ fontFamily: "'  sans-serif', Roc Grotesk" }}
                            >
                                LOTTE & CIE.LA
                            </span>
                        </Link>

                        {/* Centered Navigation */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center gap-8">
                            <div className="flex items-center gap-8">
                                {currentNavLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="relative transition-colors duration-200 group"
                                        style={{
                                            fontFamily: "'  Roc Grotesk ', sans-serif",
                                            fontSize: '19px',
                                            fontWeight: '500',
                                            color: (isDarkPage || isContactPage || isProjectsPage || isSchedulePage) ? '#FFFFFF' : 'rgb(25, 25, 25)',
                                            lineHeight: '29px'
                                        }}
                                    >
                                        {link.name}
                                        <span className={`absolute left-0 bottom-[-4px] h-[2px] transition-all duration-300 ${((link.name === 'Contact' && isContactPage) || (link.name === 'Schedule' && isSchedulePage) || (link.name === 'Projects' && isProjectsPage)) ? 'w-full bg-white opacity-100' : `w-0 group-hover:w-full ${(isDarkPage || isContactPage || isProjectsPage || isSchedulePage) ? 'bg-white' : 'bg-[#191919]'}`}`}></span>
                                    </Link>
                                ))}
                            </div>

                            {/* Icons (Search & Cart) - Hidden on Home */}
                            {!isHomePage && (
                                <div className={`flex items-center gap-4 ml-6 ${(isDarkPage || isContactPage || isProjectsPage || isSchedulePage) ? 'text-white' : 'text-[#191919]'}`}>
                                    <button className="hover:opacity-70 transition-opacity relative">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                            <line x1="3" y1="6" x2="21" y2="6"></line>
                                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                                        </svg>
                                        {isContactPage && (
                                            <span className="absolute -top-1 -right-2 bg-[#7a8208] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
                                        )}
                                    </button>
                                    <button className="hover:opacity-70 transition-opacity">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-4">
                            {/* Let's Talk Button - Hidden on Home */}
                            {!isHomePage && (
                                <Link
                                    href="/contact"
                                    className="hidden lg:flex items-center justify-center bg-[#7a8208] text-white font-bold px-8 py-3 rounded-full hover:bg-[#6b7207] transition-all text-sm tracking-wide"
                                >
                                    {isContactPage ? 'Plan a Visit' : "Let's Talk"}
                                </Link>
                            )}

                            {/* Hamburger Menu Button - Shown on Home Right per image, Mobile only on others */}
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className={`${isHomePage ? 'flex' : 'lg:hidden'} flex flex-col gap-[7px] w-10 h-10 justify-center items-center cursor-pointer group`}
                                aria-label="Open menu"
                            >
                                <span className={`w-7 h-[2.5px] transition-all duration-300 ${(isDarkPage || isContactPage || isProjectsPage || isSchedulePage) ? 'bg-white' : 'bg-black'}`}></span>
                                <span className={`w-4 h-[2.5px] transition-all duration-300 ${(isDarkPage || isContactPage || isProjectsPage || isSchedulePage) ? 'bg-white' : 'bg-black'}`}></span>
                                <span className={`w-7 h-[2.5px] transition-all duration-300 ${(isDarkPage || isContactPage || isProjectsPage || isSchedulePage) ? 'bg-white' : 'bg-black'}`}></span>
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
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
                    >
                        {/* Transparent Layer for click-outside */}
                        <div
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute inset-0 bg-transparent"
                        />

                        {/* Sidebar Drawer */}
                        <motion.div
                            initial={isMobile ? { x: '100%' } : { x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.6, ease: [0.32, 1, 0.23, 1] }}
                            className="absolute right-0 top-0 bottom-0 w-full sm:max-w-[480px] bg-[#111111] flex flex-col shadow-2xl overflow-hidden"
                        >
                            {/* Menu Header with Close Button */}
                            <div className="flex justify-between items-center px-8 pt-8 pb-4">
                                <span
                                    className="text-[32px] md:text-[36px] font-bold tracking-tight text-white"
                                    style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                >
                                    LOTTE & CIE.LA
                                </span>
                                <motion.button
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    whileHover={{ rotate: 180 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                                >
                                    <svg
                                        width="24"
                                        height="24"
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
                                    className="space-y-6 flex flex-col text-left mt-4"
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={{
                                        open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                                        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                                    }}
                                >
                                    {currentNavLinks.map((link, idx) => (
                                        <motion.div
                                            key={link.name}
                                            variants={{
                                                open: { x: 0, opacity: 1 },
                                                closed: { x: 50, opacity: 0 }
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="group flex items-center justify-start gap-6 text-white text-[42px] md:text-[52px] font-bold tracking-tight transition-all hover:pl-4"
                                                style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                                            >
                                                <span className="text-sm font-bold text-[#7a8208] mb-8 tracking-[0.2em] opacity-80 font-mono">
                                                    0{idx + 1}
                                                </span>
                                                <span className="relative">
                                                    {link.name}
                                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#7a8208] transition-all duration-500 group-hover:w-full"></span>
                                                </span>
                                                <motion.span
                                                    className="text-white/20 text-3xl group-hover:text-[#7a8208] transition-colors duration-300"
                                                >
                                                    ↗
                                                </motion.span>
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

                                    <div className="mb-10">
                                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 block mb-4">
                                            Get in Touch
                                        </span>
                                        <a href="mailto:contact@lotteciela.com" className="text-white text-lg font-medium hover:text-[#7a8208] transition-colors">
                                            contact@lotteciela.com
                                        </a>
                                    </div>

                                    {/* Social Icons */}
                                    <div className="flex items-center gap-8">
                                        <a href="#" className="text-white hover:text-[#7a8208] transition-all transform hover:scale-110">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                                        </a>
                                        <a href="#" className="text-white hover:text-[#7a8208] transition-all transform hover:scale-110">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                        </a>
                                        <a href="#" className="text-white hover:text-[#7a8208] transition-all transform hover:scale-110">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                        </a>
                                        <a href="#" className="text-white hover:text-[#7a8208] transition-all transform hover:scale-110">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                        </a>
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
