"use client";

import Image from "next/image";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Inter, Poppins } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import InfoModal from "./InfoModal";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "700"] });

export const AuthorityHero = () => {
    const { scrollYProgress } = useScroll();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.96]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

    return (
        <section className="relative lg:mt-20 w-full bg-black overflow-hidden rounded-2xl min-h-0 md:min-h-0">
            {/* MOBILE ONLY: Background Image Aspect */}
            <InfoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Elite Series Coming Soon"
                message="Our most advanced performance line is currently in the final testing phase. Sign up for our newsletter to get exclusive early access and launch-day discounts."
                size="md"
            />

            <div className="absolute inset-0 block md:hidden opacity-40">
                <Image
                    src="/images/shop/sup1-hero-c.png"
                    alt="Background Product"
                    fill
                    className="object-contain object-bottom-right scale-125"
                    priority
                />
                {/* Overlay for readability on mobile */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
            </div>

            {/* Background Glow */}
            <div className="absolute -top-40 -right-40 w-160 h-160 bg-[#93D2D9]/10 blur-[160px] rounded-full" />

            <motion.div
                style={{ scale, opacity, y }}
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="max-w-xl relative z-20">
                        {/* Heading */}
                        <h2
                            className={`${poppins.className}
                            text-[2.2rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl 2xl:text-7xl
                            font-semibold text-white leading-[1.05] tracking-tighter mb-6`}
                        >
                            PURE POWER. <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#93D2D9] to-[#6ed5e0]">
                                ZERO COMPROMISE.
                            </span>
                        </h2>

                        {/* Description */}
                        <p
                            className={`${inter.className}
                            text-gray-300 md:text-gray-400
                            text-sm sm:text-base md:text-lg
                            leading-relaxed mb-8 sm:mb-10 max-w-md`}
                        >
                            Precision-filtered whey isolate engineered for maximum
                            bio-availability. No fillers. No sugars. Just results.
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-5 sm:mb-8">
                            <Link
                                href="/shop/supplements"
                                className="group inline-flex items-center justify-center gap-3
                                bg-[#93D2D9] text-black
                                px-8 sm:px-10 py-4
                                rounded-xl font-semibold uppercase tracking-wider
                                hover:bg-white transition-all duration-300
                                shadow-lg shadow-[#93D2D9]/25"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Shop Elite Series
                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </Link>

                            <div className="flex items-center gap-3 sm:px-6 sm:border-l border-white/10">
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

                        {/* Trust */}
                        <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-3 sm:pt-4">
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

                    {/* RIGHT CONTENT (Visible from md up) */}
                    <div className="relative hidden md:flex justify-center mt-1 lg:mt-0">
                        <div className="absolute inset-0 bg-[#93D2D9]/20 blur-[120px] rounded-full scale-75" />

                        <div className="relative w-56 md:w-64 lg:w-72 2xl:w-80 aspect-3/4">
                            <Image
                                src="/images/shop/sup1-hero-c.png"
                                alt="Elite Whey Isolate"
                                fill
                                priority
                                className="object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.6)]"
                            />
                        </div>

                        {/* Floating Stats */}
                        <div className="absolute top-4 right-0 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-2 rounded-full">
                            <p className="text-[#93D2D9] font-semibold text-sm">27G</p>
                            <p className="text-gray-400 text-[8px] uppercase tracking-widest">Protein</p>
                        </div>

                        <div className="absolute bottom-10 left-0 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-2 rounded-full">
                            <p className="text-white font-semibold text-sm">0G</p>
                            <p className="text-gray-400 text-[8px] uppercase tracking-widest">Sugar</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};