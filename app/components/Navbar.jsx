"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/products" },
        { name: "About", href: "/about" },
        { name: "Reviews", href: "/testimonials" },
    ];

    return (
        <>
            <nav
                className={`fixed w-full z-50 top-0 transition-all duration-500 ease-out border-b border-transparent
                    ${scrolled
                        ? "bg-black/90 backdrop-blur-xl border-white/5 py-3 shadow-2xl shadow-black/20"
                        : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Premium Logo */}
                        <Link href="/" className="group relative">
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold tracking-tight text-white">
                                    Prime
                                </span>
                                <span className="text-2xl font-light tracking-[0.2em] text-yellow-400 uppercase">
                                    Supps
                                </span>
                            </div>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300 ease-out" />
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="relative group py-2 px-1 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        <span className="absolute bottom-0 left-0 w-0 h-px bg-yellow-400 group-hover:w-full transition-all duration-300 ease-out" />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Premium CTA Button */}
                        <div className="hidden md:block">
                            <a
                                href="tel:+123456789"
                                className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full overflow-hidden"
                            >
                                {/* Animated background */}
                                <div className="absolute inset-0 bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-size-[200%_100%] group-hover:bg-position-[100%_0] transition-all duration-500" />
                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <span className="relative flex items-center gap-2 text-black font-semibold text-sm">
                                    <Phone size={16} className="transition-transform duration-300 group-hover:rotate-12" />
                                    <span>Call Now</span>
                                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </span>
                            </a>
                        </div>

                        {/* Mobile Toggle - Premium Style */}
                        <button
                            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-5 h-5">
                                <span className={`absolute top-1/2 left-0 w-5 h-0.5 bg-white transform -translate-y-1 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`} />
                                <span className={`absolute top-1/2 left-0 w-5 h-0.5 bg-white transform -translate-y-1/2 transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100'}`} />
                                <span className={`absolute top-1/2 left-0 w-5 h-0.5 bg-white transform -translate-y-1 transition-all duration-300 ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-0.5'}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Premium Mobile Menu */}
            <div className={`
                fixed inset-0 z-40 md:hidden transition-all duration-500 ease-out
                ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
                    onClick={() => setIsOpen(false)}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-center items-center">
                    <ul className="flex flex-col items-center gap-8">
                        {navLinks.map((link, idx) => (
                            <li
                                key={link.name}
                                className={`transform transition-all duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                style={{ transitionDelay: isOpen ? `${idx * 75}ms` : '0ms' }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="group relative text-3xl font-light text-white hover:text-yellow-400 transition-colors duration-300"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-yellow-400 group-hover:w-full transition-all duration-300" />
                                </Link>
                            </li>
                        ))}

                        <li
                            className={`mt-8 transform transition-all duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: isOpen ? `${navLinks.length * 75}ms` : '0ms' }}
                        >
                            <a
                                href="tel:+123456789"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold text-lg hover:scale-105 active:scale-95 transition-transform duration-200"
                            >
                                <Phone size={20} />
                                Call Now
                            </a>
                        </li>
                    </ul>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 text-sm font-light tracking-widest uppercase">
                        Premium Supplements
                    </div>
                </div>
            </div>
        </>
    );
}