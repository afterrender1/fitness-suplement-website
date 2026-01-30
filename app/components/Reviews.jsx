
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
            gradient: "from-blue-500 to-cyan-400"
        },
        {
            name: "Michael R.",
            role: "Gym Owner",
            location: "Texas",
            text: "I've tried dozens of supplement brands. Prime Supps stands above the rest. No fillers. Just pure, science-backed results.",
            avatar: "/images/reviews/r-i-2.jpg",
            gradient: "from-violet-500 to-purple-400"
        },
        {
            name: "Brandon K.",
            role: "Pro Athlete",
            location: "Florida",
            text: "As a competitive athlete, quality matters. Prime Supps delivers pharmaceutical-grade nutrition every single time.",
            avatar: "/images/reviews/r-i-3.jpg",
            gradient: "from-amber-500 to-orange-400"
        }
    ];

    return (
        <section id="reviews" className={`bg-[#FAFAFA] py-24 md:py-32 overflow-hidden ${inter.className}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Premium Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                            </span>
                            <span className="text-slate-600 font-semibold uppercase tracking-wider text-xs">
                                Verified Reviews
                            </span>
                        </div>

                        <h2 className={`${poppins.className} text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]`}>
                            Trusted by Athletes <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-cyan-600 italic font-semibold">
                                Worldwide
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-lg border border-slate-200 shadow-xs">
                        <div className="flex -space-x-3">
                            {reviews.map((review, i) => (
                                <div
                                    key={i}
                                    className="relative w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden shrink-0 hover:z-10 hover:scale-110 transition-all duration-300"
                                >
                                    <Image
                                        src={review.avatar}
                                        alt={review.name}
                                        fill
                                        className="object-cover"
                                        sizes="40px"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="border-l border-slate-200 pl-4">
                            <div className="flex items-center gap-1">
                                <span className="text-lg font-bold text-slate-900">4.9</span>
                                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                            </div>
                            <p className="text-xs text-slate-500 font-medium">2,000+ Reviews</p>
                        </div>
                    </div>
                </div>

                {/* Premium Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {reviews.map((review, index) => (
                        <article
                            key={index}
                            className="group relative bg-white rounded-3xl p-8 border border-slate-100 hover:border-teal-500/20 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Subtle gradient overlay on hover */}
                            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-teal-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Quote Icon - Elegant styling */}
                            <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                <Quote size={48} strokeWidth={1} className="text-teal-600" />
                            </div>

                            <div className="relative z-10">
                                {/* Star Rating with micro-interaction */}
                                <div className="flex gap-0.5 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            className="fill-teal-500 text-teal-500 transition-transform duration-300 group-hover:scale-110"
                                            style={{ transitionDelay: `${i * 50}ms` }}
                                        />
                                    ))}
                                </div>

                                {/* Review Text - Refined typography */}
                                <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                                    "{review.text}"
                                </p>

                                {/* Verified Badge */}
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold mb-6">
                                    <BadgeCheck size={14} />
                                    Verified Purchase
                                </div>

                                {/* Author Info - Premium Layout */}
                                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                    <div className="relative w-12 h-12 rounded-full shadow-lg overflow-hidden shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src={review.avatar}
                                            alt={review.name}
                                            fill
                                            className="object-cover"
                                            sizes="48px"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-slate-900 font-bold text-base">
                                            {review.name}
                                        </p>
                                        <p className="text-sm text-slate-500 font-medium">
                                            {review.role} <span className="text-slate-300 mx-2">•</span> {review.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Trust Indicators Footer */}
                <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
                    <div className="flex flex-col items-center">
                        <span className={`${poppins.className} text-3xl font-bold text-slate-900`}>5000+</span>
                        <span className="text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">Supplements Sold</span>
                    </div>
                    <div className="w-px h-12 bg-slate-200 hidden md:block" />
                    <div className="flex flex-col items-center">
                        <span className={`${poppins.className} text-3xl font-bold text-slate-900`}>98%</span>
                        <span className="text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">Satisfaction</span>
                    </div>
                    <div className="w-px h-12 bg-slate-200 hidden md:block" />
                    <div className="flex flex-col items-center">
                        <span className={`${poppins.className} text-3xl font-bold text-slate-900`}>#1</span>
                        <span className="text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">Rated Premium</span>
                    </div>
                </div>
            </div>
        </section>
    );
}