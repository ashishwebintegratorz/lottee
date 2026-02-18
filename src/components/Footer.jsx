'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();
    const isContactPage = pathname === '/contact';

    return (
        <footer className={`text-white pt-20 pb-8 px-6 lg:px-12 border-t border-white/5 ${isContactPage ? 'bg-[#0f0f0f]' : 'bg-black'}`}>
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    {/* Column 1: About Us */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>
                            About Us
                        </h4>
                        <p className="text-gray-400 leading-relaxed text-[15px] max-w-xs">
                            Ignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Contacts */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>
                            Contacts
                        </h4>
                        <div className="space-y-4 text-[15px]">
                            <p className="text-gray-400 leading-relaxed">
                                Germany 785 15h Street, Office 478<br />
                                Berlin, De 81566
                            </p>
                            <Link href="#" className="inline-block text-white underline underline-offset-4 decoration-1 hover:text-gray-300 transition-colors">
                                View on Google Map
                            </Link>
                            <div className="pt-4 space-y-2">
                                <p className="text-xl font-bold">+1 840 841 25 69</p>
                                <p className="text-gray-400">info@email.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Links */}
                    <div className="space-y-8 lg:pl-10">
                        <h4 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>
                            Links
                        </h4>
                        <ul className="space-y-4 text-[15px]">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Projects', href: '/projects' },
                                { name: 'About Us', href: '/about' },
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

                    {/* Column 4: Newsletter */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>
                            Sign up for Our Newsletter
                        </h4>
                        <div className="space-y-6">
                            <div className="relative border-b border-gray-800 pb-4 group">
                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email Address"
                                        className="bg-transparent border-none outline-none text-white w-full text-[15px] placeholder:text-gray-600 focus:ring-0"
                                    />
                                    <button className="text-white hover:translate-x-1 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </button>
                                </div>
                            </div>
                            <label className="flex items-start gap-3 cursor-pointer group select-none">
                                <div className="relative mt-1">
                                    <input
                                        type="checkbox"
                                        className="appearance-none w-5 h-5 rounded border border-gray-700 bg-transparent checked:bg-[#7a8208] checked:border-[#7a8208] transition-all cursor-pointer relative checked:after:content-['✓'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white checked:after:font-bold checked:after:text-[10px]"
                                    />
                                </div>
                                <span className="text-gray-500 text-[13px] leading-tight">
                                    I agree to the <Link href="#" className="underline underline-offset-2 hover:text-gray-300">Privacy Policy</Link>.
                                </span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-[13px] tracking-wide text-center md:text-left">
                        AncoraThemes © 2026. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
