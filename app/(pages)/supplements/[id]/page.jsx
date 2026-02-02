import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Poppins, Inter } from "next/font/google";
import { 
    Star, ArrowLeft, ShieldCheck, Zap, ShoppingCart, 
    CheckCircle2, Truck, ChevronRight, Package, Clock, Award 
} from "lucide-react";
import shopData from "@/app/data/shopData.json";
import ProductImageGallery from "@/app/components/ProductImageGallery";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default async function ProductDetailPage({ params }) {
    const { id } = await params;
    const product = shopData.products.find((p) => p.id === id);

    if (!product) notFound();

    const discount = product.regular_price && product.sale_price
        ? Math.round(((product.regular_price - product.sale_price) / product.regular_price) * 100)
        : null;

    const relatedProducts = shopData.products
        .filter(p => p.id !== id)
        .slice(0, 4);

    return (
        <div className={`min-h-screen bg-[#FAFAFA] text-slate-900 ${inter.className}`}>
            <nav className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-slate-200/50">
                <div className="max-w-360 2xl:max-w-450 mx-auto px-4 sm:px-8 h-16 md:h-20 flex items-center justify-between">
                    <Link href="/" className="group flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-[#5ecad6] group-hover:text-[#5ecad6] transition-all">
                            <ArrowLeft size={16} strokeWidth={2.5} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] hidden xs:block">Store Collection</span>
                    </Link>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm">
                        <ShieldCheck size={16} className="text-[#5ecad6]" strokeWidth={2.5} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hidden sm:inline">Official Store</span>
                    </div>
                </div>
            </nav>

            <main className="max-w-360 2xl:max-w-450 mx-auto px-4 sm:px-8 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-20">
                    
                    {/* LEFT: Image Gallery */}
                    <div className="lg:col-span-7 xl:col-span-7 lg:sticky lg:top-32 lg:self-start">
                        <ProductImageGallery src={product.image_url} alt={product.name} discount={discount} />
                        
                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6">
                            {[
                                { icon: Truck, label: "Delivery", sub: "3-5 Days" },
                                { icon: Award, label: "Genuine", sub: "100% Original" },
                                { icon: Clock, label: "Support", sub: "24/7 Experts" }
                            ].map((badge, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                                    <badge.icon size={20} className="text-[#5ecad6] mb-2" />
                                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-900">{badge.label}</span>
                                    <span className="text-[8px] text-slate-400 mt-0.5">{badge.sub}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Content Section */}
                    <div className="lg:col-span-5 flex flex-col pt-4">
                        <p className="text-[#5ecad6] font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">
                            {product.vendor}
                        </p>
                        
                        <h1 className={`${poppins.className} text-3xl xs:text-4xl md:text-5xl 2xl:text-7xl font-bold tracking-tight leading-[1.1] mb-8`}>
                            {product.name}
                        </h1>

                        <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-slate-100 shadow-sm mb-8">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-sm font-semibold text-slate-400 italic">Rs</span>
                                        <span className="text-4xl 2xl:text-5xl font-bold tracking-tighter">
                                            {product.sale_price.toLocaleString()}
                                        </span>
                                    </div>
                                    {product.regular_price && (
                                        <p className="text-sm text-slate-300 line-through">Rs {product.regular_price.toLocaleString()}</p>
                                    )}
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center justify-end gap-1 mb-1">
                                        <Star size={16} className="fill-slate-900" strokeWidth={2.5} />
                                        <span className="text-xl font-black">{product.rating}</span>
                                    </div>
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block text-nowrap">Quality Verified</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-3">
                                    <Package size={18} className="text-[#5ecad6]" />
                                    <div>
                                        <p className="text-[9px] font-bold text-slate-400 uppercase">Protein</p>
                                        <p className="text-sm font-bold">{product.protein_per_serving}</p>
                                    </div>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-3">
                                    <ShieldCheck size={18} className="text-[#5ecad6]" />
                                    <div>
                                        <p className="text-[9px] font-bold text-slate-400 uppercase">DRAP</p>
                                        <p className="text-sm font-bold tracking-tight">Registered</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Benefits Checklist */}
                        <div className="space-y-3 mb-12">
                            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 italic">Performance Targets</h3>
                            {product.benefits?.map((benefit, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-50 hover:border-slate-100 transition-colors">
                                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                                        <CheckCircle2 size={12} className="text-emerald-600" strokeWidth={3} />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-600 tracking-tight">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* Actions: Responsive Sticky */}
                        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-xl border-t border-slate-100 lg:static lg:bg-transparent lg:p-0 lg:border-none z-50">
                            <div className="max-w-7xl mx-auto flex gap-4">
                                <button className="flex-3 bg-slate-900 text-white h-16 rounded-2xl font-black uppercase text-xs sm:text-sm flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-slate-900/10 active:scale-95 group">
                                    <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
                                    Add to Performance Stack
                                </button>
                                <button className="hidden sm:flex flex-1 bg-white border border-slate-200 text-slate-900 h-16 rounded-2xl font-bold text-sm items-center justify-center hover:bg-slate-50 transition-all">
                                    Compare
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Section */}
                <section className="mt-32 pt-24 border-t border-slate-200">
                    <div className="flex items-end justify-between mb-16">
                        <div>
                            <p className="text-[#5ecad6] font-bold uppercase tracking-[0.2em] text-[11px] mb-2">Build Your Stack</p>
                            <h2 className={`${poppins.className} text-3xl 2xl:text-4xl font-bold tracking-tight text-slate-900 uppercase`}>More to Explore</h2>
                        </div>
                        <Link href="/" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-black transition-all">
                            View Collection <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10">
                        {relatedProducts.map((item) => (
                            <Link key={item.id} href={`/product/${item.id}`} className="group block">
                                <div className="aspect-square bg-white rounded-[2.5rem] border border-slate-100 mb-6 flex items-center justify-center p-8 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-slate-200/50 group-hover:-translate-y-1">
                                    <Image src={item.image_url} alt={item.name} width={250} height={250} className="object-contain mix-blend-multiply" />
                                </div>
                                <h4 className={`${poppins.className} text-sm font-bold text-slate-900 mb-1 line-clamp-1`}>{item.name}</h4>
                                <p className="text-sm font-bold text-[#5ecad6] italic tracking-tight">Rs {item.sale_price.toLocaleString()}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}