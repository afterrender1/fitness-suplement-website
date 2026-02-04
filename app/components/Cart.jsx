"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty, toggleCart } from "@/app/store/cartSlice";
import Link from 'next/link';

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');
  .font-syne { font-family: 'Syne', sans-serif; }
  .font-inter { font-family: 'Inter', sans-serif; }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
`;

export default function CartDrawer() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.cart.isOpen);
    const items = useSelector((state) => state.cart.items);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

    // Sync body overflow with isOpen state
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleClose = () => dispatch(toggleCart());

    return (
        <>
            <style>{fontStyles}</style>
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-100 flex">
                        {/* OVERLAY: Premium Glassmorphism */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleClose}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        />

                        {/* CART SHEET: Elite Design */}
                        <motion.div
                            initial={{ x: "100%", scale: 0.98 }}
                            animate={{ x: 0, scale: 1 }}
                            exit={{ x: "100%", scale: 0.98 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="font-inter relative ml-auto h-full w-full max-w-105 bg-white shadow-[0_0_50px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden"
                        >
                            {/* HEADER */}
                            <div className="px-6 pt-8 pb-4">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="font-syne text-[1.6rem] font-800 tracking-tighter text-black uppercase leading-none">
                                            Bag
                                        </h2>
                                        <p className="text-[0.6rem] font-700 uppercase tracking-[0.2em] mt-1.5 flex items-center gap-1.5 text-gray-400">
                                            <span className="h-1 w-1 rounded-full bg-green-500" />
                                            {items.length} Units Secured
                                        </p>
                                    </div>
                                    <button
                                        onClick={handleClose}
                                        className="h-10 w-10 flex items-center justify-center bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all active:scale-90"
                                    >
                                        <X size={18} strokeWidth={2.5} />
                                    </button>
                                </div>

                                <div className="relative overflow-hidden bg-[#0a0a0a] rounded-xl p-3.5 flex items-center justify-between">
                                    <div className="relative z-10">
                                        <p className="text-[0.55rem] font-800  uppercase tracking-widest mb-0.5 text-white/60">Status</p>
                                        <p className="text-white text-[0.7rem] font-600 tracking-tight">Priority Shipping Enabled</p>
                                    </div>
                                    <Sparkles className="text-yellow-400 relative z-10" size={16} />
                                </div>
                            </div>

                            {/* ITEM LIST */}
                            <div className="flex-1 overflow-y-auto px-6 py-2 space-y-4 scrollbar-hide">
                                <LayoutGroup>
                                    <AnimatePresence mode='popLayout'>
                                        {items.map((item) => (
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                key={item.id}
                                                className="group flex gap-4 items-center bg-gray-50/50 p-3 rounded-[22px] border border-transparent hover:border-gray-100 transition-all"
                                            >
                                                <div className="w-20 h-20">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover p-1" />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h4 className="font-syne text-[0.85rem] font-700 text-black leading-tight truncate pr-2">{item.name}</h4>
                                                        <button
                                                            onClick={() => dispatch(removeFromCart(item.id))}
                                                            className="text-gray-300 hover:text-red-500 transition-colors"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>

                                                    <div className="flex items-center justify-between mt-3">
                                                        <p className="text-[0.75rem] font-700 text-gray-900">${item.price.toFixed(2)}</p>

                                                        {/* ELITE QUANTITY CONTROL */}
                                                        <div className="flex items-center gap-1 p-1 ">
                                                            <motion.button
                                                                whileTap={{ scale: 0.9 }}
                                                                onClick={() => dispatch(decreaseQty(item.id))}
                                                                className="w-7 h-7 sm:w-6 sm:h-6 flex items-center justify-center rounded-full text-neutral-400 hover:bg-black hover:text-white transition-all"
                                                            >
                                                                <Minus size={11} strokeWidth={2.5} />
                                                            </motion.button>

                                                            <div className="min-w-6 flex flex-col items-center">
                                                                <AnimatePresence mode="wait">
                                                                    <motion.span
                                                                        key={item.qty}
                                                                        initial={{ y: 2, opacity: 0 }}
                                                                        animate={{ y: 0, opacity: 1 }}
                                                                        exit={{ y: -2, opacity: 0 }}
                                                                        className="text-[0.75rem] sm:text-[0.65rem] font-800 text-black"
                                                                    >
                                                                        {item.qty}
                                                                    </motion.span>
                                                                </AnimatePresence>
                                                            </div>

                                                            <motion.button
                                                                whileTap={{ scale: 0.9 }}
                                                                onClick={() => dispatch(increaseQty(item.id))}
                                                                className="w-7 h-7 sm:w-6 sm:h-6 flex items-center justify-center rounded-full text-neutral-400 hover:bg-black hover:text-white transition-all"
                                                            >
                                                                <Plus size={11} strokeWidth={2.5} />
                                                            </motion.button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </LayoutGroup>
                            </div>

                            {/* FOOTER */}
                            <div className="px-5 pb-3 pt-1 border-t border-gray-50">
                                <div className="bg-gray-50 rounded-2xl p-4 mb-1 space-y-1">
                                    <div className="flex justify-between items-center text-gray-400 uppercase tracking-widest text-[0.55rem] font-800">
                                        <span>Shipping & Tax</span>
                                        <span className="text-black font-600 tracking-normal text-[0.7rem]">Calculated at Checkout</span>
                                    </div>
                                    <div className="flex justify-between items-end pt-1">
                                        <span className="font-syne text-[1.1rem] font-800 text-black uppercase tracking-tighter">Subtotal</span>
                                        <span className="text-[1.4rem] font-800 leading-none text-black">${subtotal.toFixed(2)}</span>
                                    </div>
                                </div>

                              <Link href="/checkout">
                              
                              
                                <button onClick={()=> handleClose()} className="group relative w-full h-12 bg-black text-white rounded-xl overflow-hidden transition-all active:scale-[0.98]">
                                    <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <div className="relative z-10 flex items-center justify-center gap-3">
                                        <span className="font-syne text-[0.85rem] font-700 uppercase tracking-widest">Complete Order</span>
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </button>
                              
                              </Link>

                                <div className="mt-4 flex items-center justify-center gap-1.5 text-[0.55rem] font-800 text-green-800 uppercase tracking-widest">
                                    <ShieldCheck size={12} className="text-green-800" />
                                    SSL Secure Transaction
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}