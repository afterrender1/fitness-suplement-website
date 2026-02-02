"use client";

import { Star, Quote, BadgeCheck } from "lucide-react";
import { Poppins, Inter } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ weight: ["600", "700", "900"], subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Reviews() {
    const reviews = [
        {
            name: "Jason M.",
            role: "Fitness Coach",
            location: "California",
            text: "Prime Supps completely changed my training. Clean energy, insane pumps, and zero crash. This is elite-level supplementation.",
            avatar: "/images/reviews/r-i-1.jpg",
            gradient: "from-blue-500 to-cyan-400",
        },
        {
            name: "Michael R.",
            role: "Gym Owner",
            location: "Texas",
            text: "I've tried dozens of supplement brands. Prime Supps stands above the rest. No fillers. Just pure, science-backed results.",
            avatar: "/images/reviews/r-i-2.jpg",
            gradient: "from-violet-500 to-purple-400",
        },
        {
            name: "Brandon K.",
            role: "Pro Athlete",
            location: "Florida",
            text: "As a competitive athlete, quality matters. Prime Supps delivers pharmaceutical-grade nutrition every single time.",
            avatar: "/images/reviews/r-i-3.jpg",
            gradient: "from-amber-500 to-orange-400",
        },
    ];

    return (
        <section id="reviews" className={`bg-[#FAFAFA] py-16 sm:py-20 md:py-24 overflow-hidden ${inter.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4 sm:mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                            </span>
                            <span className="text-slate-600 font-semibold uppercase tracking-wider text-[10px] sm:text-xs">
                                Verified Reviews
                            </span>
                        </div>

                        <h2 className={`${poppins.className} text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-snug sm:leading-[1.1]`}>
                            Trusted by Athletes <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-cyan-600 italic font-semibold">
                                Worldwide
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4 bg-white px-4 sm:px-6 py-2 sm:py-4 rounded-lg border border-slate-100  overflow-x-auto no-scrollbar">
                        <div className="flex -space-x-3">
                            {reviews.map((review, i) => (
                                <div
                                    key={i}
                                    className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-md overflow-hidden shrink-0 hover:z-10 hover:scale-110 transition-all duration-300"
                                >
                                    <Image src={review.avatar} alt={review.name} fill className="object-cover" sizes="40px" />
                                </div>
                            ))}
                        </div>

                        <div className="border-l border-slate-200 pl-3 sm:pl-4 shrink-0">
                            <div className="flex items-center gap-1">
                                <span className="text-sm sm:text-lg font-bold text-slate-900">4.9</span>
                                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                            </div>
                            <p className="text-[10px] sm:text-xs text-slate-500 font-medium">2,000+ Reviews</p>
                        </div>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {reviews.map((review, index) => (
                        <article
                            key={index}
                            className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-slate-100 hover:border-teal-500/20 transition-all duration-500 hover:shadow-[0_15px_50px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-linear-to-br from-teal-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                <Quote size={36} strokeWidth={1} className="text-teal-600" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex gap-0.5 mb-4 sm:mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className="fill-teal-500 text-teal-500 transition-transform duration-300 group-hover:scale-110"
                                            style={{ transitionDelay: `${i * 50}ms` }}
                                        />
                                    ))}
                                </div>

                                <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 font-medium">
                                    "{review.text}"
                                </p>

                                <div className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-[10px] sm:text-xs font-semibold mb-4 sm:mb-6">
                                    <BadgeCheck size={12} />
                                    Verified Purchase
                                </div>

                                <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-slate-100">
                                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg overflow-hidden shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Image src={review.avatar} alt={review.name} fill className="object-cover" sizes="48px" />
                                    </div>
                                    <div>
                                        <p className="text-sm sm:text-base font-bold text-slate-900">{review.name}</p>
                                        <p className="text-xs sm:text-sm text-slate-500 font-medium">
                                            {review.role} <span className="text-slate-300 mx-1 sm:mx-2">•</span> {review.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Trust Footer */}
                <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-16 text-center">
                    <div className="flex flex-col items-center">
                        <span className={`${poppins.className} text-2xl sm:text-3xl font-semibold text-slate-900`}>5000+</span>
                        <span className="text-[10px] sm:text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">Supplements Sold</span>
                    </div>
                    <div className="w-px h-10 sm:h-12 bg-slate-200 hidden md:block" />
                    <div className="flex flex-col items-center">
                        <span className={`${poppins.className} text-2xl sm:text-3xl font-semibold text-slate-900`}>98%</span>
                        <span className="text-[10px] sm:text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">Satisfaction</span>
                    </div>
                    <div className="w-px h-10 sm:h-12 bg-slate-200 hidden md:block" />
                    <div className="flex flex-col items-center">
                        <span className={`${poppins.className} text-2xl sm:text-3xl font-semibold text-slate-900`}>#1</span>
                        <span className="text-[10px] sm:text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">Rated Premium</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
