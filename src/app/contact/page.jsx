"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        agree: false
    });
    const [errors, setErrors] = useState({});
    const [showGlobalError, setShowGlobalError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = 'The field is required.';
        if (!formData.email) newErrors.email = 'The field is required.';
        if (!formData.phone) newErrors.phone = 'The field is required.';
        if (!formData.subject) newErrors.subject = 'The field is required.';
        if (!formData.message) newErrors.message = 'The field is required.';
        if (!formData.agree) newErrors.agree = 'Please agree to the privacy policy.';

        setErrors(newErrors);
        const hasErrors = Object.keys(newErrors).length > 0;
        setShowGlobalError(hasErrors);
        return !hasErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Construct WhatsApp message
            const phoneNumber = "8989944488";
            const whatsappText = `Hello Lotte Aimée,

I would like to get in touch regarding: ${formData.subject}

My Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Message:
${formData.message}`;

            const encodedText = encodeURIComponent(whatsappText);
            const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodedText}`;

            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');

            console.log('Form submitted:', formData);
            setShowSuccess(true);
            setShowGlobalError(false);

            // Reset form to fresh state
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                agree: false
            });

            // Automatically hide success message after 5 seconds
            setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
        if (showSuccess) setShowSuccess(false);
        if (showGlobalError) setShowGlobalError(false);
    };
    return (
        <main className="min-h-screen bg-[#1a1a1a]">
            {/* Hero Section with Refined Image Background */}
            <div className="relative h-[80vh] w-full overflow-hidden bg-[#111111]">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/contact img.jpeg"
                        alt="Contact Lotte & CIE.LA"
                        fill
                        className="object-cover brightness-75"
                        priority
                    />
                    {/* Artistic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#1a1a1a]" />
                </div>

                {/* Hero Content */}
                <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-xs font-bold tracking-[0.5em] text-white uppercase mb-6"
                    >
                        Get in Touch
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[12vw] md:text-[8vw] lg:text-[120px] font-bold text-white leading-none tracking-tighter"
                        style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
                    >
                        CONTACT
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2"
                    >
                        <div className="w-[1px] h-12 bg-white/30" />
                    </motion.div>
                </div>
            </div>

            {/* Contact Form Section */}
            <section id="contact-form" className="relative z-10 -mt-[1px] bg-[#1a1a1a] text-white py-24 px-6 md:px-12">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Side: Contact Details */}
                    <div className="lg:col-span-4 space-y-10">
                        <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>Contact Details</h2>



                        {/* Social Icons & Email */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                            </div>

                            <div className="space-y-2">
                                <p className="text-white/40 text-xs font-bold tracking-widest uppercase">Email Us</p>
                                <a href="mailto:info@lotteaimee.com" className="text-xl md:text-2xl font-medium hover:text-[#7a8208] transition-colors inline-block">
                                    lottedeweert3@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:col-span-8">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                            {/* Name */}
                            <div className="relative group">
                                <span className={`absolute left-0 top-1 transition-colors ${errors.name ? 'text-red-500' : 'text-white/40 group-focus-within:text-[#7a8208]'}`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </span>
                                <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name" className={`w-full bg-transparent border-b pb-4 pl-10 outline-none transition-all placeholder:text-white/40 ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-[#7a8208]'}`} />
                                {errors.name && <p className="text-red-500 text-xs mt-2 font-medium">The field is required.</p>}
                            </div>
                            {/* Email */}
                            <div className="relative group">
                                <span className={`absolute left-0 top-1 transition-colors ${errors.email ? 'text-red-500' : 'text-white/40 group-focus-within:text-[#7a8208]'}`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </span>
                                <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address" className={`w-full bg-transparent border-b pb-4 pl-10 outline-none transition-all placeholder:text-white/40 ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#7a8208]'}`} />
                                {errors.email && <p className="text-red-500 text-xs mt-2 font-medium">The field is required.</p>}
                            </div>
                            {/* Phone */}
                            <div className="relative group">
                                <span className={`absolute left-0 top-1 transition-colors ${errors.phone ? 'text-red-500' : 'text-white/40 group-focus-within:text-[#7a8208]'}`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </span>
                                <input name="phone" value={formData.phone} onChange={handleChange} type="text" placeholder="Phone" className={`w-full bg-transparent border-b pb-4 pl-10 outline-none transition-all placeholder:text-white/40 ${errors.phone ? 'border-red-500' : 'border-white/10 focus:border-[#7a8208]'}`} />
                                {errors.phone && <p className="text-red-500 text-xs mt-2 font-medium">The field is required.</p>}
                            </div>
                            {/* Subject */}
                            <div className="relative group">
                                <span className={`absolute left-0 top-1 transition-colors ${errors.subject ? 'text-red-500' : 'text-white/40 group-focus-within:text-[#7a8208]'}`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                </span>
                                <input name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="Subject" className={`w-full bg-transparent border-b pb-4 pl-10 outline-none transition-all placeholder:text-white/40 ${errors.subject ? 'border-red-500' : 'border-white/10 focus:border-[#7a8208]'}`} />
                                {errors.subject && <p className="text-red-500 text-xs mt-2 font-medium">The field is required.</p>}
                            </div>
                            {/* Message */}
                            <div className="md:col-span-2 relative group pt-4">
                                <span className={`absolute left-0 top-5 transition-colors ${errors.message ? 'text-red-500' : 'text-white/40 group-focus-within:text-[#7a8208]'}`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                </span>
                                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you? Feel free to get in touch!" rows="4" className={`w-full bg-transparent border-b pb-4 pl-10 outline-none transition-all placeholder:text-white/40 resize-none ${errors.message ? 'border-red-500' : 'border-white/10 focus:border-[#7a8208]'}`}></textarea>
                                {errors.message && <p className="text-red-500 text-xs mt-2 font-medium">The field is required.</p>}
                            </div>

                            {/* Submit and Privacy */}
                            <div className="md:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-8 mt-4">
                                <button type="submit" className="bg-[#7a8208] hover:bg-[#6b7207] text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 transition-all group">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                    Get In Touch
                                </button>
                                <div className="flex flex-col">
                                    <label className="flex items-center gap-3 text-white/40 text-sm cursor-pointer select-none">
                                        <input
                                            name="agree"
                                            checked={formData.agree}
                                            onChange={handleChange}
                                            type="checkbox"
                                            className={`appearance-none w-5 h-5 rounded border bg-transparent transition-all cursor-pointer relative checked:after:content-['✓'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white checked:after:font-bold checked:after:text-[10px] ${errors.agree ? 'border-red-500' : 'border-white/20 checked:bg-[#7a8208] checked:border-[#7a8208]'}`}
                                        />
                                        <span>I agree that my submitted data is <span className="underline cursor-pointer hover:text-white">collected and stored.</span></span>
                                    </label>
                                    {errors.agree && <p className="text-red-500 text-xs mt-1 font-medium italic">Please check this box to proceed.</p>}
                                </div>
                            </div>
                        </form>

                        {/* Global Error Message */}
                        {showGlobalError && (
                            <div className="mt-8 p-4 border border-red-500 rounded-md bg-transparent flex items-center gap-3 text-white font-medium">
                                <span>One or more fields have an error. Please check and try again.</span>
                            </div>
                        )}

                        {/* Success Message */}
                        {showSuccess && (
                            <div className="mt-8 p-4 border border-[#7a8208] rounded-md bg-[#7a8208]/5 flex items-center gap-3 text-white font-medium animate-in fade-in zoom-in slide-in-from-bottom-2 duration-500">
                                <div className="w-2 h-2 rounded-full bg-[#7a8208] animate-pulse"></div>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7a8208" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
