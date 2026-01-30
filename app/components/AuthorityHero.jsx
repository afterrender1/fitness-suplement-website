"use client";

import Image from "next/image";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "700"] });

export const AuthorityHero = () => {
    return (
        <section className="relative m-4 rounded-2xl bg-black overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-40 -right-40 w-160 h-160 bg-[#93D2D9]/10 blur-[160px] rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="max-w-xl">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#93D2D9] animate-pulse" />
                            <span className="text-[#93D2D9] text-[10px] font-bold uppercase tracking-[0.25em]">
                                Elite Formula
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className={`${poppins.className} text-4xl sm:text-5xl md:text-7xl font-semibold text-white leading-[1.05] tracking-tighter mb-6`}
                        >
                            PURE POWER. <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#93D2D9] to-[#6ed5e0]">
                                ZERO COMPROMISE.
                            </span>
                        </h2>

                        {/* Description */}
                        <p
                            className={`${inter.className} text-gray-400 text-base md:text-lg leading-relaxed mb-10`}
                        >
                            Precision-filtered whey isolate engineered for maximum
                            bio-availability. No fillers. No sugars. Just results.
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-12">
                            <Link
                                href="/shop/supplements"
                                className="group flex items-center gap-3 bg-[#93D2D9] text-black px-10 py-4 rounded-xl font-semibold uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-lg shadow-[#93D2D9]/25"
                            >
                                Shop Elite Series
                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </Link>

                            <div className="flex items-center gap-3 px-6 border-l border-white/10">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className="fill-[#93D2D9] text-[#93D2D9]"
                                        />
                                    ))}
                                </div>
                                <span className="text-white text-xs font-bold">
                                    4.9 / 5 Rating
                                </span>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                            <div className="flex items-center gap-2 text-white/60">
                                <ShieldCheck size={18} className="text-[#93D2D9]" />
                                <span className="text-[10px] font-bold uppercase tracking-wider">
                                    Lab Tested
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-white/60">
                                <Star size={18} className="text-[#93D2D9]" />
                                <span className="text-[10px] font-bold uppercase tracking-wider">
                                    Athlete Trusted
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative flex justify-center">

                        {/* Glow */}
                        <div className="absolute inset-0 bg-[#93D2D9]/20 blur-[140px] rounded-full scale-75" />

                        {/* Product */}
                        <div className="relative w-56 sm:w-64 md:w-72 aspect-3/4">
                            <Image
                                src="/images/shop/sup1-hero-c.png"
                                alt="Elite Whey Isolate"
                                fill
                                priority
                                className="object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.6)]"
                            />
                        </div>

                        {/* Floating Stats */}
                        <div className="absolute top-6 right-0 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl">
                            <p className="text-[#93D2D9] font-black text-xl">27G</p>
                            <p className="text-gray-400 text-[9px] uppercase font-bold tracking-widest">
                                Protein
                            </p>
                        </div>

                        <div className="absolute bottom-10 left-0 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl">
                            <p className="text-white font-black text-xl">0G</p>
                            <p className="text-gray-400 text-[9px] uppercase font-bold tracking-widest">
                                Sugar
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
