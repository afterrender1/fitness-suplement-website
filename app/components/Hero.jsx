"use client";

import Image from "next/image";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Inter, Poppins } from "next/font/google";

// Load Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "700"],
    variable: "--font-poppins"
});

export default function Hero() {
    return (
        <section className="relative w-full h-[85vh] sm:h-[90vh] md:h-[95vh] flex items-center overflow-hidden bg-black">

            {/* Background Images */}
            <div className="absolute inset-0 z-0">
                {/* Mobile */}
                <Image
                    src="/images/h-mobile.jpg"
                    alt="Premium Supplements"
                    fill
                    priority
                    className="object-cover opacity-80 object-bottom-left block sm:hidden"
                />
                {/* Small Tablets */}
                <Image
                    src="/images/h-mobile.jpg"
                    alt="Premium Supplements"
                    fill
                    priority
                    className="object-cover opacity-80 hidden sm:block md:hidden"
                />
                {/* Desktop */}
                <Image
                    src="/images/h1.jpg"
                    alt="Premium Supplements"
                    fill
                    priority
                    className="object-cover object-right md:object-center opacity-80 hidden md:block"
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-xl mt-5 sm:mt-10">

                    {/* Heading */}
                    <h1
                        className={`${poppins.className} text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-snug sm:leading-[1.1] tracking-tight mb-4 sm:mb-6`}
                    >
                        EVOLVE YOUR <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#93D2D9] to-[#6ed5e0]">
                            PERFORMANCE
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p
                        className={`${inter.className} text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-10 leading-relaxed max-w-md`}
                    >
                        Science-backed formulas designed for those who refuse to settle.
                        Pure ingredients. Maximum bio-availability. No fillers.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 items-start sm:items-center">
                        <Link
                            href="/shop/supplements"
                            className="flex items-center justify-center gap-2 sm:gap-3 bg-[#93D2D9] text-black px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-lg shadow-[#93D2D9]/25"
                        >
                            Pick Supplements
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white/20 transition-all mt-3 sm:mt-0">
                            GYM Enrollment
                        </button>
                    </div>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-2 md:flex gap-6 sm:gap-8 border-t border-white/10 pt-4 sm:pt-6">
                        <div className="flex items-center gap-2 text-white/60">
                            <ShieldCheck size={16} className="text-[#93D2D9]" />
                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">Third-Party Tested</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/60">
                            <Star size={16} className="text-[#93D2D9]" />
                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">5-Star Rated</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Side Text (Desktop Only) */}
            <div className="hidden lg:block absolute right-6 bottom-6">
                <div className="rotate-90 origin-right">
                    <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">
                        Est. MMXXIV — High Performance Nutrition
                    </p>
                </div>
            </div>
        </section>
    );
}
