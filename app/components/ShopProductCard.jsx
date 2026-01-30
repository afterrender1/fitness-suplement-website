"use client";

import Image from "next/image";
import { Star, BadgeCheck } from "lucide-react";

export default function ShopProductCard({ product }) {
    const discount =
        product.regular_price && product.sale_price
            ? Math.round(
                ((product.regular_price - product.sale_price) /
                    product.regular_price) *
                100
            )
            : null;

    return (
        <article className="group relative bg-white  overflow-hidden border border-[#f5f4f4] ">

            {/* Image */}
            <div className="relative  aspect-square p-4">
                <Image
                    src={`/images/products/${product.image_url}`}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                />

                {/* Discount badge */}
                {discount && (
                    <span className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold px-2 py-1 rounded-full">
                        -{discount}%
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-3">

                {/* Vendor */}
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    {product.vendor}
                </span>

                {/* Name */}
                <h3 className="font-semibold text-sm leading-snug line-clamp-2">
                    {product.name}
                </h3>

                {/* Protein + Rating */}
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-600">
                        {product.protein_per_serving} Protein
                    </span>

                    {product.rating && (
                        <div className="flex items-center gap-1 text-xs font-bold">
                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                            {product.rating}
                        </div>
                    )}
                </div>

                {/* Benefits */}
                {product.benefits && (
                    <div className="flex flex-wrap gap-2">
                        {product.benefits.slice(0, 2).map((b, i) => (
                            <span
                                key={i}
                                className="text-[10px] bg-slate-100 px-2 py-1 rounded-full font-semibold text-slate-600"
                            >
                                {b}
                            </span>
                        ))}
                    </div>
                )}

                {/* Price */}
                <div className="flex items-end justify-between mt-2">
                    <div>
                        <p className="text-lg font-semibold">
                            Rs {product.sale_price.toLocaleString()}
                        </p>
                        {product.regular_price && (
                            <p className="text-xs line-through text-gray-400">
                                Rs {product.regular_price.toLocaleString()}
                            </p>
                        )}
                    </div>

                  
                </div>
            </div>
        </article>
    );
}
