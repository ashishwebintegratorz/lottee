'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();
    const isContactPage = pathname === '/contact';

    return (
        <footer className={`text-white pt-20 pb-8 px-6 lg:px-12 border-t border-white/5 ${isContactPage ? 'bg-[#0f0f0f]' : 'bg-black'}`}>
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 mb-20">

                    {/* Column 1: Profile */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>
                            Lotte Aimée de Weert
                        </h4>
                        <p className="text-gray-400 leading-relaxed text-[15px] max-w-sm">
                            A Dutch-born choreographer and performer based in Paris, merging physical intensity with emotional precision. Her work bridges dance, theatre, and fashion through a refined and cinematic movement language.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Research & Collaborations */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>
                            Research & Collaborations
                        </h4>
                        <div className="space-y-6 text-gray-400 text-[15px] leading-relaxed">
                            <p>
                                Through her association <span className="text-white font-medium">CIE.LA</span>, supported by the <span className="text-white font-medium">Centre National de la Danse</span> and <span className="text-white font-medium">La Ménagerie de Verre</span> in Paris.
                            </p>
                            <p className="italic text-sm">
                                Exploring the dialogue between dance, conceptual research, and cinematic storytelling.
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Navigation */}
                    <div className="space-y-8 lg:pl-12">
                        <h4 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>
                            Explore
                        </h4>
                        <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-[15px]">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Choreographies', href: '/projects' },
                                { name: 'About', href: '/about' },
                                { name: 'Schedule', href: '/schedule' },
                                { name: 'Contacts', href: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-[13px] tracking-wide text-center md:text-left">
                        LOTTE & CIE.LA © 2026. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
