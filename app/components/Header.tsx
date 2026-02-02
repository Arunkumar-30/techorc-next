"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "../data/services";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false); // For mobile accordion

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div
                role="banner"
                className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100/50 shadow-sm transition-all duration-300"
            >
                {/* Top Gradient Line */}
                <div className="h-1 w-full bg-gradient-to-r from-[#0cf2f2] via-[#00a8f2] to-[#9d12bb]"></div>

                <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
                    <Link href="/" aria-label="Techorc home" className="flex-shrink-0">
                        <Image
                            src="/images/logo.svg"
                            width={140}
                            height={40}
                            alt="Techorc Software Solutions"
                            className="w-[140px] h-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav role="navigation" className="hidden lg:flex items-center gap-8">
                        <Link href="/" className="text-gray-700 hover:text-[#00a8f2] font-semibold transition-colors text-[15px]">Home</Link>

                        {/* Company Dropdown */}
                        <div className="relative group">
                            <button className="text-gray-700 hover:text-[#00a8f2] font-semibold transition-colors flex items-center gap-1 text-[15px] py-4">
                                Company
                                <svg className="w-4 h-4 transition-transform group-hover:rotate-180 text-[#00a8f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div className="absolute left-0 mt-0 w-48 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2 z-50">
                                <div className="grid gap-1">
                                    <Link href="/about" className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#00a8f2] rounded-lg transition-colors">About Us</Link>
                                    <Link href="/team" className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#00a8f2] rounded-lg transition-colors">Our Team</Link>
                                    <Link href="/careers" className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#00a8f2] rounded-lg transition-colors">Careers</Link>
                                </div>
                            </div>
                        </div>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button className="text-gray-700 hover:text-[#00a8f2] font-semibold transition-colors flex items-center gap-1 text-[15px] py-4">
                                Our Services
                                <svg className="w-4 h-4 transition-transform group-hover:rotate-180 text-[#00a8f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-80 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-3 z-50">
                                <div className="grid gap-1">
                                    {Object.entries(servicesData).map(([key, data]) => (
                                        <Link
                                            key={key}
                                            href={`/${key}`}
                                            className="block px-4 py-3 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#00a8f2] rounded-lg transition-colors"
                                        >
                                            {data.heroTitle}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link href="/#Testimonial" className="text-gray-700 hover:text-[#00a8f2] font-semibold transition-colors text-[15px]">Success Stories</Link>
                        <Link
                            href="/contact"
                            className="bg-gradient-to-r from-[#0cf2f2] to-[#00a8f2] hover:from-[#00a8f2] hover:to-[#008ecb] text-white px-7 py-2.5 rounded-full shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all font-bold text-[15px] transform hover:-translate-y-0.5"
                        >
                            Contact Us
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div
                        className="lg:hidden cursor-pointer p-2 rounded-md hover:bg-gray-50"
                        onClick={toggleMenu}
                        aria-label="Menu"
                    >
                        <div className={`w-6 h-0.5 bg-gray-800 mb-1.5 transition-all origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-gray-800 mb-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-gray-800 transition-all origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`lg:hidden bg-white/95 backdrop-blur-xl absolute w-full border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[85vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col p-6 gap-4">
                        <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-[#00a8f2] font-semibold text-lg border-b border-gray-50 pb-2">Home</Link>

                        <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-[#00a8f2] font-semibold text-lg border-b border-gray-50 pb-2">Company</Link>

                        {/* Mobile Services Accordion */}
                        <div className="border-b border-gray-50 pb-2">
                            <button
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                className="flex items-center justify-between w-full text-gray-800 hover:text-[#00a8f2] font-semibold text-lg"
                            >
                                Our Services
                                <svg className={`w-5 h-5 text-[#00a8f2] transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div className={`mt-3 space-y-1 pl-4 border-l-2 border-[#00a8f2]/20 transition-all duration-300 ${isServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                {Object.entries(servicesData).map(([key, data]) => (
                                    <Link
                                        key={key}
                                        href={`/${key}`}
                                        onClick={() => setIsOpen(false)}
                                        className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#00a8f2]"
                                    >
                                        {data.heroTitle}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-[#00a8f2] font-semibold text-lg border-b border-gray-50 pb-2">About us</Link>
                        <Link href="/#Testimonial" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-[#00a8f2] font-semibold text-lg border-b border-gray-50 pb-2">Testimonial</Link>
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="bg-gradient-to-r from-[#0cf2f2] to-[#00a8f2] text-white px-6 py-3 rounded-full shadow-md text-center font-bold text-lg mt-2"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
