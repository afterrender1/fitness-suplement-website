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
        <section className="relative w-full h-[95vh] flex items-center overflow-hidden bg-black">

            {/* Background with Intelligent Gradient Mask */}
            {/* Background with Intelligent Gradient Mask */}
            <div className="absolute inset-0 z-0">

                {/* XS (mobile) */}
                <Image
                    src="/images/h-mobile.jpg"
                    alt="Premium Supplements"
                    fill
                    priority
                    className="object-cover opacity-80 object-center block sm:hidden"
                />

                {/* SM (small tablets) */}
                <Image
                    src="/images/h-mobile.jpg"
                    alt="Premium Supplements"
                    fill
                    priority
                    className="object-cover opacity-80 hidden sm:block md:hidden"
                />

                {/* MD & up (desktop) */}
                <Image
                    src="/images/h1.jpg"
                    alt="Premium Supplements"
                    fill
                    priority
                    className="object-cover object-right md:object-center opacity-80 hidden md:block"
                />

                {/* Gradient overlays (same for all) */}
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />

            </div>


            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl mt-5">

                    <h1 className={`text-5xl md:text-7xl font-semibold  text-white leading-[1.1] tracking-tighter mb-6 ${poppins.className}`}>
                        EVOLVE YOUR <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#93D2D9] to-[#6ed5e0]">
                            PERFORMANCE
                        </span>
                    </h1>

                    {/* Subtext - Improved readability with width constraint */}
                    <p className={`text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-lg ${inter.className}`}>
                        Science-backed formulas designed for those who refuse to settle.
                        Pure ingredients. Maximum bio-availability. No fillers.
                    </p>

                    {/* Action Area */}
                    <div className={`flex flex-col sm:flex-row gap-4 mb-12 items-start sm:items-center ${inter.className}`}>
                        <div className="relative group">
                            <Link
                                href="/shop/supplements"
                                className="flex items-center justify-center gap-3 bg-[#93D2D9] text-black px-10 py-4 rounded-xl font-semibold uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-lg shadow-[#93D2D9]/25 hover:shadow-white/20"
                            >
                                Pick Supplements
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            {/* Professional Offer Tag with Arrow */}
                            <div className="animate-pulse absolute -bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                                {/* Upward pointing arrow/caret */}
                                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-slate-900 drop-shadow-sm"></div>

                                <div className={`bg-green-800 text-white text-[11px] font-bold px-4 py-1.5 rounded-sm shadow-lg border border-slate-800 uppercase tracking-widest whitespace-nowrap `}>
                                    Save 50% Today
                                </div>
                            </div>
                        </div>

                        <button className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md border uppercase border-white/10 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all sm:mt-0 mt-6">
                            GYM Enrollment
                        </button>
                    </div>

                    {/* Trust Badges - Minimalist Style */}
                    <div className={`grid grid-cols-2 md:flex gap-8 border-t border-white/10 pt-8 ${inter.className}`}>
                        <div className="flex items-center gap-2 text-white/50">
                            <ShieldCheck size={20} className="text-[#93D2D9]" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Third-Party Tested</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/50">
                            <Star size={20} className="text-[#93D2D9]" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">5-Star Rated</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Aesthetic Side Element (Desktop Only) */}
            <div className={`hidden lg:block absolute right-12 bottom-12`}>
                <div className="rotate-90 origin-right">
                    <p className="text-[10px] font-bold tracking-[0.5em] text-white/20 uppercase">
                        Est. MMXXIV — High Performance Nutrition
                    </p>
                </div>
            </div>
        </section>
    );
}