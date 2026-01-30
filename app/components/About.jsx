"use client";

import {
    ShieldCheck,
    FlaskConical,
    Trophy,
    Zap,
    CheckCircle2,
    Microscope,
    Award
} from "lucide-react";
import { Poppins, Inter } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ weight: ["600", "800"], subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function About() {
    return (
        <section
            id="about"
            className={`bg-white py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden ${inter.className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

                {/* ───────────────── HEADER ───────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-12 md:mb-16 lg:mb-24 items-end">
                    <div className="lg:col-span-7 xl:col-span-8">
                        <span className="text-teal-600 font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4 block animate-pulse">
                            Evolution of Nutrition
                        </span>

                        <div
                            className={`${poppins.className}
                            text-[clamp(2rem,8vw,4.5rem)]
                            font-bold text-slate-900 tracking-tight leading-[0.95] sm:leading-[0.9]`}
                        >
                            Performance <br className="hidden sm:block" />
                            <span className="text-slate-300 relative inline-block mt-1 sm:mt-2">
                                Without Limits
                                <span className="absolute -bottom-1 left-0 w-full h-[0.1em] bg-linear-to-r from-teal-400 to-cyan-400 opacity-50"></span>
                            </span>
                        </div>
                    </div>

                    <div className="lg:col-span-5 xl:col-span-4">
                        <p className="text-slate-500 text-sm sm:text-base lg:text-lg xl:text-xl font-light leading-relaxed max-w-lg lg:max-w-none">
                            We stripped away the marketing fluff and kept the science.
                            Clean formulas. High dosages. Real results that speak for themselves.
                        </p>
                    </div>
                </div>

                {/* ───────────────── MAIN GRID ───────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">

                    {/* HERO IMAGE - Adaptive Aspect Ratios */}
                    <div className="lg:col-span-7">
                        <div className="
                            relative group w-full
                            aspect-3/4  sm:aspect-4/5 md:aspect-3/4 lg:aspect-4/5 xl:aspect-3/4
                            rounded-3xl sm:rounded-4xl lg:rounded-2xl rounded-tr-none
                            overflow-hidden bg-slate-100 shadow-2xl shadow-slate-200/50
                        ">
                            <Image
                                src="/images/about/lab1.jpg"
                                alt="Lab testing"
                                fill
                                priority
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 58vw"
                                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                            {/* Floating Badge - Responsive sizing */}
                            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-auto">
                                <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-2 sm:px-4 sm:py-3 rounded-full text-white shadow-lg">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-500 flex items-center justify-center shrink-0">
                                        <Zap size={16} className="sm:size-18" fill="white" />
                                    </div>
                                    <span className="text-[11px] sm:text-xs lg:text-sm font-bold tracking-wide truncate">
                                        99.9% Purity Guaranteed
                                    </span>
                                </div>
                            </div>

                            {/* Corner Detail */}
                            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 ">
                                <Microscope size={20} className="sm:size-10 text-teal-600" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT STACK - Bento Grid */}
                    <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">

                        {/* BENTO CARD - Research */}
                        <div className="
                            bg-[#F3F7F8] flex-1
                            rounded-2xl sm:rounded-2xl lg:rounded-2xl rounded-bl-none
                            p-5 sm:p-6 lg:p-8 xl:p-10
                            flex flex-col justify-between
                          
                        ">
                            <div className="space-y-3 sm:space-y-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white flex items-center justify-center border-[0.5px] border-gray-200">
                                    <FlaskConical className="text-teal-600 size-5 sm:size-6" />
                                </div>

                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 leading-tight">
                                    Research Focused
                                </h3>

                                <p className="text-slate-500 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xs lg:max-w-none">
                                    Our lab is at the intersection of sports medicine and molecular biology. Every compound is tested for bioavailability.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                                {["No Fillers", "No Banned Subs", "Vegan", "Non-GMO"].map((tag, i) => (
                                    <span
                                        key={tag}
                                        className="text-[9px] sm:text-[10px] lg:text-xs font-bold uppercase tracking-wider px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white rounded-full border border-slate-200 cursor-default"
                                        style={{ animationDelay: `${i * 100}ms` }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* SPLIT STATS ROW */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">

                            {/* Stats Card 1 */}
                            <div className="relative bg-slate-900 rounded-2xl sm:rounded-2xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 text-white flex flex-col items-center justify-center text-center overflow-hidden group min-h-35 sm:min-h-40">
                                <Trophy
                                    size={64}
                                    className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 opacity-10"
                                />
                                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-none mb-1 sm:mb-2 relative z-10">
                                    100+
                                </h4>
                                <p className="text-slate-400 text-[9px] sm:text-[10px] lg:text-xs font-semibold uppercase tracking-widest relative z-10">
                                    Pro Athletes
                                </p>
                            </div>

                            {/* Stats Card 2 */}
                            <div className="relative bg-teal-500 rounded-2xl sm:rounded-4xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 text-white flex flex-col items-center justify-center text-center overflow-hidden group min-h-35 sm:min-h-40">
                                <div className="absolute inset-0 bg-linear-to-br from-teal-400 to-cyan-600 " />
                                <Award size={28} fill="yellow" className="text-yellow-300 sm:size-20 mb-2 sm:mb-3 relative z-10 " />
                                <p className="font-semibold text-xs sm:text-sm lg:text-base leading-tight relative z-10">
                                    NSF Certified <br className="hidden sm:block" /> Formula
                                </p>
                            </div>

                        </div>

                        {/* Additional Mini Card - Optional for larger screens */}
                        <div className="hidden lg:flex bg-white border border-gray-200 rounded-xl p-6 items-center gap-4 ">
                            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                                <ShieldCheck className="text-teal-600" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Batch Tested</h4>
                                <p className="text-xs text-slate-500">Every production run verified</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ───────────────── TRUST BAR ───────────────── */}
                <div className="mt-12 sm:mt-16 lg:mt-24 flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between border-t border-slate-100 pt-8 sm:pt-10">
                    <p className="text-slate-400 font-medium text-xs sm:text-sm max-w-md text-center md:text-left leading-relaxed">
                        Every Prime Supps product is verified for quality by global standards and third-party laboratories.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-16 grayscale  transition-all duration-700 cursor-default">
                        {['LAB-CORP', 'EURO-BIO', 'HEALTH-LINE', 'NSF'].map((brand) => (
                            <span
                                key={brand}
                                className="text-sm sm:text-base lg:text-lg font-black italic tracking-tighter text-slate-900 "
                            >
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}