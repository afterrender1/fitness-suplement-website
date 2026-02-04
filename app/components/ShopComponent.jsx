// "use client";

import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { Poppins, Inter } from "next/font/google";
import ShopProductCard from "@/app/components/ShopProductCard";
import shopData from "@/app/data/shopData.json";

const poppins = Poppins({ weight: ["500", "600", "700"], subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const ShopComponent = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const products = shopData.products;

    return (
        <main className={`min-h-screen bg-[#ffff] rounded-t-3xl md:rounded-t-4xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] relative z-10 pt-10 sm:pt-12 pb-30 2xl:pt-18 2xl:pb-48 ${inter.className}`}>
            <div className="max-w-7xl 2xl:max-w-440 mx-auto px-6 lg:px-8 2xl:px-12">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 2xl:mb-24">
                    <div className="max-w-2xl 2xl:max-w-4xl">
                        <p className="text-slate-400 font-medium uppercase tracking-widest text-[10px] md:text-xs 2xl:text-base mb-4">
                            {shopData.store_name} • Premium Supplements
                        </p>
                        <h1 className={`${poppins.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]`}>
                            Fuel Your <br className='hidden md:flex' />
                            <span className="text-[#5ecad6]">{" "}Performance</span>
                        </h1>
                    </div>

                    <div className="flex gap-4 sm:gap-6 lg:gap-8 2xl:gap-16 lg:pl-8 2xl:pl-16">
                        <div>
                            <p className="text-xl sm:text-2xl lg:text-3xl 2xl:text-5xl font-semibold text-slate-900">
                                3–5d
                            </p>
                            <p className="
      text-[0.55rem]
      sm:text-[0.65rem]
      md:text-xs
      lg:text-sm
      font-medium
      text-slate-400
      uppercase
      tracking-wider
      mt-1
    ">
                                Delivery
                            </p>
                        </div>

                        <div>
                            <p className="text-xl sm:text-2xl lg:text-3xl 2xl:text-5xl font-bold text-slate-900">
                                100%
                            </p>
                            <p className="
      text-[0.55rem]
      sm:text-[0.65rem]
      md:text-xs
      lg:text-sm
      font-medium
      text-slate-400
      uppercase
      tracking-wider
      mt-1
    ">
                                Authentic
                            </p>
                        </div>
                    </div>

                </div>

                {/* Filter Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-12 gap-4">
                    {/* Category scrollable buttons */}
                    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 sm:pb-0 w-full sm:w-auto">
                        {["All", "Protein", "Vegan", "Recovery"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`shrink-0 px-5 py-2 rounded-sm text-xs sm:text-sm font-bold transition-all ${activeCategory === cat
                                    ? "bg-black text-white"
                                    : "bg-white text-slate-500 hover:bg-slate-100"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Filter button */}
                    <button className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-900">
                        <SlidersHorizontal size={16} /> Filter
                    </button>
                </div>

                {/* Product Grid */}
                <div className=" grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 lg:gap-10 2xl:gap-12">
                    {products.map((product, index) => (
                        <ShopProductCard key={product.id || index} product={product} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ShopComponent;