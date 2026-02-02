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
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isFullScreen, handleKeyDown]);

    return (
        <>
            <div
                className="group relative aspect-square bg-white rounded-lg md:rounded-lg border border-gray-100 overflow-hidden cursor-zoom-in "
                onClick={() => setIsFullScreen(true)}
            >
                {/* Visual Polish */}
                <div className="absolute inset-0 z-10 bg-linear-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover p-8 md:p-16 mix-blend-multiply transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Hover UI */}
                <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                        <ZoomIn size={24} className="text-slate-900" />
                    </div>
                </div>

                {discount && (
                    <div className={`absolute top-8 left-8 z-20 bg-slate-900 text-white text-[10px] font-semibold px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 tracking-widest uppercase ${inter.className}`}>
                        <Zap size={12} fill="#5ecad6" className="text-[#5ecad6]" />
                        SAVE {discount}%
                    </div>
                )}
            </div>

            {/* Professional Fullscreen Modal */}
            {isFullScreen && (
                <div
                    className="fixed inset-0 z-999 h-screen bg-white backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
                    onClick={() => setIsFullScreen(false)}
                >
                    <button
                        className="absolute top-6 right-6 md:top-12 md:right-12 p-2 text-gray-800 border border-gray-200 backdrop-blur-md rounded-lg transition-all duration-300 z-1010 group"
                        onClick={(e) => { e.stopPropagation(); setIsFullScreen(false); }}
                    >
                        <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                    </button>

                    <div className="relative  w-full h-full max-w-6xl animate-in zoom-in-95 duration-300 ease-out">
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-contain mix-blend-multiply drop-shadow-2xl"
                        />
                    </div>

                   
                </div>
            )}
        </>
    );
}