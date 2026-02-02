"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Twitter, ArrowUp } from "lucide-react";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({ weight: ["600", "800"], subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={`bg-slate-900 text-slate-400 ${inter.className} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-linear-to-b from-slate-900 to-slate-950 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-teal-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="py-12 sm:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

                    {/* Brand */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-block group">
                            <span className={`${poppins.className} text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-teal-400 transition-colors duration-300`}>
                                Prime<span className="text-teal-500">Supps</span>
                            </span>
                        </Link>

                        <p className="text-sm leading-relaxed max-w-xs text-slate-400">
                            Premium performance supplements built on science, purity, and results. Elevate your potential.
                        </p>

                        {/* Social */}
                        <div className="flex items-center gap-4">
                            {[Instagram, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-110"
                                    aria-label="Social link"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Navigate</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-sm hover:text-teal-400 transition-colors duration-300 inline-block hover:translate-x-1 transform">Home</Link>
                            </li>
                            <li>
                                <Link href="/shop/supplements" className="text-sm hover:text-teal-400 transition-colors duration-300 inline-block hover:translate-x-1 transform">Shop</Link>
                            </li>
                            <li>
                                <Link href="/#about" className="text-sm hover:text-teal-400 transition-colors duration-300 inline-block hover:translate-x-1 transform">About</Link>
                            </li>
                            <li>
                                <Link href="/#reviews" className="text-sm hover:text-teal-400 transition-colors duration-300 inline-block hover:translate-x-1 transform">Reviews</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm hover:text-teal-400 transition-colors duration-300 inline-block hover:translate-x-1 transform">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="tel:+1234567890" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                                        <Phone size={14} className="text-teal-500" />
                                    </div>
                                    <span>+1 (234) 567-890</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@primesupps.com" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                                        <Mail size={14} className="text-teal-500" />
                                    </div>
                                    <span>hello@primesupps.com</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                                    <MapPin size={14} className="text-teal-500" />
                                </div>
                                <span>Los Angeles, CA<br />United States</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Stay Updated</h4>
                        <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                            Subscribe for training tips, new releases, and exclusive offers.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all"
                            />
                            <button
                                type="submit"
                                className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-300 whitespace-nowrap"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-500">
                        <span>&copy; {new Date().getFullYear()} Afterrender. All rights reserved.</span>
                        <span className="hidden sm:block text-slate-700">|</span>
                        <div className="flex items-center gap-4">
                            <Link href="/privacy" className="hover:text-teal-400 transition-colors">Privacy</Link>
                            <Link href="/terms" className="hover:text-teal-400 transition-colors">Terms</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
                            Fuel • Perform • Recover
                        </span>

                        <button
                            onClick={scrollToTop}
                            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-teal-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
                            aria-label="Back to top"
                        >
                            <ArrowUp size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
