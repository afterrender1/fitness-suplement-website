"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from "next/image";
import { X, ZoomIn, Zap } from "lucide-react";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function ProductImageGallery({ src, alt, discount }) {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleKeyDown = useCallback((e) => {
        if (e.key === "Escape") setIsFullScreen(false);
    }, []);

    useEffect(() => {
        if (isFullScreen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isFullScreen, handleKeyDown]);

    return (
        <>
            <div
                className="group relative aspect-square bg-white rounded-lg md:rounded-lg border border-gray-100 overflow-hidden cursor-zoom-in"
                onClick={() => setIsFullScreen(true)}
            >
                <div className="absolute inset-0 z-10 bg-linear-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover p-8 md:p-16 transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                        <ZoomIn size={24} className="text-slate-900" />
                    </div>
                </div>

                {discount && (
                    <div className={`absolute top-4 left-4 z-20 bg-slate-900 text-white text-[10px] font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 tracking-widest uppercase ${inter.className}`}>
                        <Zap size={12} fill="#5ecad6" className="text-[#5ecad6]" />
                        SAVE {discount}%
                    </div>
                )}
            </div>

            {/* Fullscreen Modal */}
            {isFullScreen && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-12"
                    onClick={() => setIsFullScreen(false)}
                >
                    <button
                        className="absolute top-6 right-6 md:top-12 md:right-12 p-2 text-white border border-gray-700 backdrop-blur-md rounded-lg z-50"
                        onClick={(e) => { e.stopPropagation(); setIsFullScreen(false); }}
                    >
                        <X size={24} />
                    </button>

                    <div className="relative max-h-screen max-w-full w-full md:w-auto flex items-center justify-center">
                        <Image
                            src={src}
                            alt={alt}
                            width={1200}
                            height={1200}
                            className="object-contain max-h-screen max-w-full rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
