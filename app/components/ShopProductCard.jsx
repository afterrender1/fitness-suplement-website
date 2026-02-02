"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function ShopProductCard({ product }) {
    const discount =
        product.regular_price && product.sale_price
            ? Math.round(
                ((product.regular_price - product.sale_price) /
                    product.regular_price) *
                100
            )
            : null;

    const imageSrc =
        product.image_url && product.image_url.startsWith("http")
            ? product.image_url
            : "/placeholder-product.png";

    return (
        <article className="
      group relative
      bg-white
      border border-gray-200
      rounded-xl
      overflow-hidden
   
    ">

            {/* IMAGE */}
            <div className="relative aspect-square bg-gray-50 p-4">
                <Image
                    src={imageSrc}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                />

                {/* Discount */}
                {discount && (
                    <span className="
            absolute top-3 left-3
            bg-black text-white
            text-[10px] font-bold
            px-2.5 py-1 rounded-full
          ">
                        -{discount}%
                    </span>
                )}
            </div>

            {/* CONTENT */}
            <div className="p-4 flex flex-col gap-3">

                {/* Vendor */}
                <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">
                    {product.vendor}
                </span>

                {/* Name */}
                <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
                    {product.name}
                </h3>

                {/* Protein + Rating */}
                <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-600">
                        {product.protein_per_serving} Protein
                    </span>

                    {product.rating && (
                        <div className="flex items-center gap-1 text-xs font-semibold text-gray-700">
                            <Star size={13} className="fill-yellow-400 text-yellow-400" />
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
                                className="
                  text-[10px]
                  bg-gray-100
                  text-gray-600
                  px-2 py-1
                  rounded-full
                  font-medium
                "
                            >
                                {b}
                            </span>
                        ))}
                    </div>
                )}

                {/* Price */}
                <div className="mt-2">
                    <p className="text-lg font-semibold text-gray-900">
                        Rs {product.sale_price.toLocaleString()}
                    </p>
                    {product.regular_price && (
                        <p className="text-xs text-gray-400 line-through ">
                            Rs {product.regular_price.toLocaleString()}
                        </p>
                    )}
                </div>
            </div>
        </article>
    );
}
