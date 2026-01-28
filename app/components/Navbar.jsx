"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Inter, Poppins } from "next/font/google";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "700", "900"], subsets: ["latin"] });

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
    }, [isOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop/supplements" },
        { name: "About", href: "/about" },
        { name: "Reviews", href: "/testimonials" },
    ];

    return (
        <>
            <nav
                className={`fixed w-full z-60 top-0 transition-all duration-500 ease-out  border-b ${inter.className
                    } ${scrolled || isOpen
                        ? "bg-black/95 backdrop-blur-xl border-white/10 py-2 sm:py-3 shadow-2xl"
                        : "bg-transparent border-transparent py-4 sm:py-6 2xl:py-8"
                    }`}
            >
                <div className="max-w-350 mx-auto px-4 xs:px-6 md:px-10 2xl:px-16">
                    <div className="flex items-center justify-between">

                        {/* Logo - Fully Responsive Text Sizes */}
                        <Link
                            href="/"
                            className={`group relative z-70 ${poppins.className}`}
                        >
                            <div className="flex items-center gap-2">

                                {/* Logo Wrapper */}
                                <div
                                    className="
        relative
        w-22.5 xs:w-[110px] sm:w-30 md:w-32.5 lg:w-37.5 2xl:w-45
        h-6 xs:h-[28px] sm:h-7.5 md:h-8.5 lg:h-9.5 2xl:h-11
      "
                                >
                                    <Image
                                        src="/images/brand.png"
                                        alt="Prime Supps Logo"
                                        fill
                                        priority
                                        className="object-contain transition-transform duration-300 group-hover:scale-102"
                                    />
                                </div>

                            </div>
                        </Link>

                        {/* Desktop Navigation - Responsive Gaps & Text */}
                        <ul className="hidden md:flex items-center md:gap-4 lg:gap-8 xl:gap-12 2xl:gap-16">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="relative group py-2 text-xs lg:text-sm 2xl:text-base font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-all"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#93D2D9] group-hover:w-full transition-all duration-300" />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Right Side: Responsive CTA & Menu */}
                        <div className="flex items-center gap-2 xs:gap-4 lg:gap-6">
                            <div className="hidden md:block">
                                <a
                                    href="tel:+123456789"
                                    className="group relative inline-flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3 2xl:px-10 2xl:py-5 rounded-full overflow-hidden bg-[#93D2D9  ] transition-transform active:scale-95"
                                >
                                    <span className="relative z-10 flex items-center gap-2 text-gray-50 font-black text-[10px] lg:text-xs 2xl:text-lg uppercase italic tracking-tighter">
                                        <Phone size={14} className="2xl:w-6 2xl:h-6" />
                                        <span>Call Now</span>
                                        <ArrowUpRight size={12} className="2xl:w-5 2xl:h-5 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </a>
                            </div>

                            {/* Mobile Toggle Button - Responsive Sizing */}
                            <button
                                className="md:hidden relative z-70 w-10 h-10 xs:w-12 xs:h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <X className="w-5 h-5 xs:w-6 xs:h-6" /> : <Menu className="w-5 h-5 xs:w-6 xs:h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer - Ultra Responsive Typography */}
            <div className={`
        fixed inset-0 z-50 md:hidden transition-all duration-500 ease-in-out
        ${isOpen ? "translate-y-0" : "-translate-y-full"}
      `}>
                <div className="absolute inset-0 bg-black/98 backdrop-blur-3xl" />

                <div className="relative h-full flex flex-col justify-center px-6 xs:px-10">
                    <div className={`${poppins.className}`}>
                        <p className="text-[#93D2D9] text-[10px] xs:text-xs font-semibold uppercase tracking-[0.4em] mb-6 opacity-50">Menu</p>
                        <ul className="flex flex-col gap-4 xs:gap-6">
                            {navLinks.map((link, idx) => (
                                <li
                                    key={link.name}
                                    className={`transition-all duration-700 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl xs:text-5xl sm:text-6xl font-semibold text-white hover:text-yellow-400 transition-colors inline-block uppercase italic tracking-tighter"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`mt-10 xs:mt-16 pt-8 border-t border-white/10 transition-all duration-1000 delay-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <a
                            href="tel:+123456789"
                            className="flex items-center justify-center gap-3 w-full bg-[#93D2D9] text-black font-bold py-4 xs:py-5 rounded-2xl text-base xs:text-xl uppercase tracking-tighter"
                        >
                            <Phone size={20} />
                            Contact Expert
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}