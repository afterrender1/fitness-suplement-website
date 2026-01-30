"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Zap, Plus, Heart, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { Poppins, Inter } from "next/font/google";
import Navbar from '@/app/components/Navbar';
import { AuthorityHero } from '@/app/components/AuthorityHero';

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

const ShopPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredProduct, setHoveredProduct] = useState(null);

    return (
        <>

            <Navbar />
            <AuthorityHero />
            <main className={`min-h-screen bg-[#FAFAFA] pt-24 pb-32 ${inter.className}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Refined Header */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <p className="text-slate-400 font-medium uppercase tracking-[0.2em] text-xs mb-4">Premium Supplements</p>
                            <h1 className={`${poppins.className} text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]`}>
                                Fuel Your <br />
                                <span className="text-teal-500">Performance</span>
                            </h1>
                            <p className="mt-6 text-slate-500 text-base lg:text-lg max-w-xl leading-relaxed">
                                Professional grade nutrition for athletes who demand excellence.
                                Pure ingredients, clinically dosed.
                            </p>
                        </div>

                        {/* Minimal Stats */}
                        <div className="flex gap-8 lg:border-l lg:border-slate-200 lg:pl-8">
                            <div className="text-center lg:text-left">
                                <p className="text-3xl font-bold text-slate-900">24h</p>
                                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">Dispatch</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <p className="text-3xl font-bold text-slate-900">100%</p>
                                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">Guarantee</p>
                            </div>
                        </div>
                    </div>

                    {/* Refined Filter Bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-y border-slate-200 mb-12">
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
                            {["All", "Protein", "Energy", "Strength", "Health"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 whitespace-nowrap border
                                    ${activeCategory === cat
                                            ? "bg-slate-900 text-white border-slate-900 shadow-md"
                                            : "bg-transparent text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700"}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                            <button className="flex items-center gap-2 hover:text-slate-700 transition-colors">
                                <SlidersHorizontal size={14} /> Filter
                            </button>
                            <span className="text-slate-200">|</span>
                            <button className="hover:text-slate-700 transition-colors">Sort: Featured</button>
                        </div>
                    </div>

                    {/* Premium Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="group relative"
                                onMouseEnter={() => setHoveredProduct(product.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                {/* Image Container - Clean & Premium */}
                                <div className="relative aspect-4/5 bg-linear-to-b from-slate-50 to-slate-100 rounded-3xl overflow-hidden border border-slate-100 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-slate-200/50 group-hover:-translate-y-1">

                                    {/* Subtle Tag */}
                                    <div className="absolute top-5 left-5 z-20">
                                        <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-teal-600 shadow-sm border border-slate-100">
                                            <Zap size={10} className="fill-current" /> {product.tag}
                                        </span>
                                    </div>

                                    {/* Wishlist - Subtle */}
                                    <button className="absolute top-5 right-5 z-20 p-2.5 bg-white/90 backdrop-blur-sm rounded-full border border-slate-100 text-slate-400 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:text-red-500 hover:border-red-100 hover:bg-red-50">
                                        <Heart size={16} />
                                    </button>

                                    {/* Product Image with subtle zoom */}
                                    <div className="relative w-full h-full p-12 transition-transform duration-700 ease-out group-hover:scale-110">
                                        <Image
                                            src={product.img}
                                            alt={product.name}
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>

                                    {/* Hover Overlay - Smooth */}
                                    <div className={`absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent transition-opacity duration-500 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}>
                                        <button className="absolute bottom-6 left-6 right-6 bg-white text-slate-900 py-4 rounded-2xl flex items-center justify-center gap-2 font-semibold text-sm tracking-wide hover:bg-teal-50 transition-colors duration-300 shadow-lg">
                                            <Plus size={18} />
                                            <span>Quick Add</span>
                                            <ArrowUpRight size={16} className="ml-auto opacity-50" />
                                        </button>
                                    </div>
                                </div>

                                {/* Product Info - Clean Layout */}
                                <div className="mt-6 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider">{product.category}</p>
                                        <div className="flex items-center gap-1.5">
                                            <Star size={12} className="fill-yellow-400 text-yellow-400" />
                                            <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                                            <span className="text-[10px] text-slate-400">({product.reviews})</span>
                                        </div>
                                    </div>

                                    <h3 className={`${poppins.className} text-lg font-semibold text-slate-900 leading-tight group-hover:text-teal-600 transition-colors duration-300`}>
                                        {product.name}
                                    </h3>

                                    <div className="flex items-baseline gap-2 pt-1">
                                        <span className="text-2xl font-bold text-slate-900 tracking-tight">${product.price}</span>
                                        <span className="text-xs text-slate-400 font-medium">USD</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All CTA */}
                    <div className="mt-20 text-center">
                        <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-sm tracking-wide hover:bg-slate-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                            View All Products
                            <ArrowUpRight size={18} />
                        </button>
                    </div>
                </div>
            </main>

        </>
    );
};

export default ShopPage;