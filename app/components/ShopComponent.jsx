"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Zap, Plus, Heart, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({ weight: ["500", "600", "700"], subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const products = [
    { id: 1, name: "Elite Whey Isolate", category: "Protein", price: 59.99, tag: "Best Seller", rating: 4.9, reviews: 128, img: "https://images.unsplash.com/photo-1593094859922-847f95c261e1?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Pre-Workout Ignition", category: "Energy", price: 44.99, tag: "New", rating: 4.8, reviews: 84, img: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Creatine Monohydrate", category: "Strength", price: 34.99, tag: "Pure Grade", rating: 5.0, reviews: 256, img: "https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?auto=format&fit=crop&q=80&w=800" },
    { id: 4, name: "Essential BCAA 2:1:1", category: "Recovery", price: 29.99, tag: "Recovery", rating: 4.7, reviews: 92, img: "https://images.unsplash.com/photo-1610725666202-156ecbb6bb2a?auto=format&fit=crop&q=80&w=800" },
    { id: 5, name: "Vegan Protein Pro", category: "Plant Based", price: 54.99, tag: "Organic", rating: 4.6, reviews: 64, img: "https://images.unsplash.com/photo-1593094859922-847f95c261e1?auto=format&fit=crop&q=80&w=800" },
    { id: 6, name: "Nightly ZMA Sleep", category: "Health", price: 24.99, tag: "Rest", rating: 4.9, reviews: 178, img: "https://images.unsplash.com/photo-1626243640347-857c8d8a002c?auto=format&fit=crop&q=80&w=800" },
];

const ShopComponent = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredProduct, setHoveredProduct] = useState(null);

    return (
        <main className={`min-h-screen bg-[#FAFAFA] rounded-t-3xl md:rounded-t-4xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] relative z-10 pt-24 pb-32 2xl:pt-40 2xl:pb-48 ${inter.className}`}>
            <div className="max-w-7xl 2xl:max-w-450 mx-auto px-6 lg:px-8 2xl:px-12">
                {/* ... (Existing Filter Bar & Header Logic) ... */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 2xl:mb-24">
                    <div className="max-w-2xl 2xl:max-w-4xl">
                        <p className="text-slate-400 font-medium uppercase tracking-[0.2em] text-[10px] md:text-xs 2xl:text-base mb-4">Premium Supplements</p>
                        <h1 className={`${poppins.className} text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-bold text-slate-900 tracking-tight leading-[1.1]`}>
                            Fuel Your <br />
                            <span className="text-teal-500">Performance</span>
                        </h1>
                    </div>
                    <div className="flex gap-8 2xl:gap-16 lg:border-l lg:border-slate-200 lg:pl-8 2xl:pl-16">
                        <div>
                            <p className="text-3xl 2xl:text-5xl font-bold text-slate-900">24h</p>
                            <p className="text-[10px] 2xl:text-sm font-medium text-slate-400 uppercase tracking-wider mt-1">Dispatch</p>
                        </div>
                        <div>
                            <p className="text-3xl 2xl:text-5xl font-bold text-slate-900">100%</p>
                            <p className="text-[10px] 2xl:text-sm font-medium text-slate-400 uppercase tracking-wider mt-1">Guarantee</p>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-10 2xl:gap-12">
                    {products.map((product) => (
                        <div key={product.id} className="group relative" onMouseEnter={() => setHoveredProduct(product.id)} onMouseLeave={() => setHoveredProduct(null)}>
                            <div className="relative aspect-4/5 bg-linear-to-b from-slate-50 to-slate-100 rounded-3xl overflow-hidden border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                                <div className="relative w-full h-full p-12 transition-transform duration-700 ease-out group-hover:scale-110">
                                    <Image src={product.img} alt={product.name} fill className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 25vw" />
                                </div>
                                <div className={`absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent transition-opacity duration-500 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}>
                                    <button className="absolute bottom-6 left-6 right-6 bg-white text-slate-900 py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm shadow-lg">
                                        <Plus size={18} /> Quick Add
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 space-y-2">
                                <h3 className={`${poppins.className} text-lg 2xl:text-3xl font-semibold text-slate-900 leading-tight group-hover:text-teal-600 transition-colors`}>{product.name}</h3>
                                <p className="text-2xl 2xl:text-4xl font-bold text-slate-900">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ShopComponent;