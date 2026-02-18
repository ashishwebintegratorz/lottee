'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();
    const isAboutPage = pathname === '/about';
    const isContactPage = pathname === '/contact';
    const isProjectsPage = pathname === '/projects';
    const isSchedulePage = pathname === '/schedule';

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-10 right-10 w-14 h-14 text-white rounded-full flex items-center justify-center shadow-lg transition-all z-[60] group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                } ${(isAboutPage || isContactPage || isProjectsPage || isSchedulePage) ? 'bg-[#7a8208] hover:bg-[#6b7207]' : 'bg-[#802a2a] hover:bg-[#6b2323]'}`}
            aria-label="Scroll to top"
        >
            <span className="text-2xl group-hover:-translate-y-1 transition-transform">↑</span>
        </button>
    );
}
