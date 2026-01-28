import Image from "next/image";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-[95vh] flex items-center overflow-hidden bg-black">

            {/* Background with Intelligent Gradient Mask */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.jpg"
                    alt="Premium Supplements"
                    fill
                    priority
                    className="object-cover object-right md:object-center opacity-80"
                />
                {/* Radical gradient: Darker on the left for text readability, clear on the right */}
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl">

                    {/* Social Proof Tag */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full mb-8">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-gray-800" />
                            ))}
                        </div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-yellow-400">
                            500k+ Strong
                        </p>
                    </div>

                    {/* Headline - Using tight tracking and balanced leading */}
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6">
                        EVOLVE YOUR <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-200">
                            PERFORMANCE
                        </span>
                    </h1>

                    {/* Subtext - Improved readability with width constraint */}
                    <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
                        Science-backed formulas designed for those who refuse to settle.
                        Pure ingredients. Maximum bio-availability. No fillers.
                    </p>

                    {/* Action Area */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button className="group flex items-center justify-center gap-3 bg-yellow-400 text-black px-10 py-4 rounded-xl font-black uppercase tracking-wider hover:bg-white transition-all duration-300">
                            Shop The Range
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                            Our Science
                        </button>
                    </div>

                    {/* Trust Badges - Minimalist Style */}
                    <div className="grid grid-cols-2 md:flex gap-8 border-t border-white/10 pt-8">
                        <div className="flex items-center gap-2 text-white/50">
                            <ShieldCheck size={20} className="text-yellow-400" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Third-Party Tested</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/50">
                            <Star size={20} className="text-yellow-400" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">5-Star Rated</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Aesthetic Side Element (Desktop Only) */}
            <div className="hidden lg:block absolute right-12 bottom-12">
                <div className="rotate-90 origin-right">
                    <p className="text-[10px] font-bold tracking-[0.5em] text-white/20 uppercase">
                        Est. MMXXIV — High Performance Nutrition
                    </p>
                </div>
            </div>
        </section>
    );
}