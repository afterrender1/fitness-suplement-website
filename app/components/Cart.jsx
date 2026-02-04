"use client";
import React from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "@/app/store/cartSlice";

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');
  .font-syne { font-family: 'Syne', sans-serif; }
  .font-inter { font-family: 'Inter', sans-serif; }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
`;

const Cart = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <>
            <style>{fontStyles}</style>
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="fixed inset-0 z-100 bg-black/40 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ x: "100%", scale: 0.98 }}
                            animate={{ x: 0, scale: 1 }}
                            exit={{ x: "100%", scale: 0.98 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="font-inter fixed right-0 top-0 bottom-0 z-110 w-full max-w-110 bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col border border-gray-100"
                        >
                            {/* --- HEADER: Tight Padding --- */}
                            <div className="px-6 pt-8 pb-4">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="font-syne text-[1.6rem] font-800 tracking-tighter text-black uppercase leading-none">
                                            Bag
                                        </h2>
                                        <p className="text-[0.6rem] font-700  uppercase tracking-[0.2em] mt-1.5 flex items-center gap-1.5">
                                            <span className="h-1 w-1 rounded-full bg-green-500" />
                                            {items.length} Units Secured
                                        </p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="h-10 w-10 flex items-center justify-center bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all active:scale-90"
                                    >
                                        <X size={18} strokeWidth={2.5} />
                                    </button>
                                </div>

                                {/* VIP Nudge: Compact Padding */}
                                <div className="relative overflow-hidden bg-[#0a0a0a] rounded-xl p-3.5 flex items-center justify-between">
                                    <div className="relative z-10">
                                        <p className="text-[0.55rem] font-800 text-gray-500 uppercase tracking-widest mb-0.5">Status</p>
                                        <p className="text-white text-[0.7rem] font-600 tracking-tight">Priority Shipping Enabled</p>
                                    </div>
                                    <Sparkles className="text-yellow-400 relative z-10" size={16} />
                                </div>
                            </div>

                            {/* --- LIST: Bento Spacing --- */}
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
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover p-0" />
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

                                                        {/* Compact Quantity UI */}
                                                        <div className="flex items-center gap-1 bg-neutral-50 border border-neutral-200/60 rounded-full p-0.75 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
                                                            {/* Decrease Button */}
                                                            <motion.button
                                                                whileHover={{ backgroundColor: "#000", color: "#fff" }}
                                                                whileTap={{ scale: 0.9 }}
                                                                onClick={() => dispatch(decreaseQty(item.id))}
                                                                className="w-8 h-8 md:w-6 md:h-6 flex items-center justify-center rounded-full text-neutral-400 hover:text-white transition-colors duration-300 ease-out"
                                                            >
                                                                <Minus size={12} strokeWidth={2.5} />
                                                            </motion.button>

                                                            {/* Value Display */}
                                                            <div className="min-w-6 flex flex-col items-center justify-center">
                                                                <AnimatePresence mode="wait">
                                                                    <motion.span
                                                                        key={item.qty}
                                                                        initial={{ y: 2, opacity: 0 }}
                                                                        animate={{ y: 0, opacity: 1 }}
                                                                        exit={{ y: -2, opacity: 0 }}
                                                                        transition={{ duration: 0.10 }}
                                                                        className="font-syne text-[0.8rem] md:text-[0.7rem] font-800 text-black leading-none"
                                                                    >
                                                                        {item.qty}
                                                                    </motion.span>
                                                                </AnimatePresence>
                                                            </div>

                                                            {/* Increase Button */}
                                                            <motion.button
                                                                whileHover={{ backgroundColor: "#000", color: "#fff" }}
                                                                whileTap={{ scale: 0.9 }}
                                                                onClick={() => dispatch(increaseQty(item.id))}
                                                                className="w-8 h-8 md:w-6 md:h-6 flex items-center justify-center rounded-full text-neutral-400 hover:text-white transition-colors duration-300 ease-out"
                                                            >
                                                                <Plus size={12} strokeWidth={2.5} />
                                                            </motion.button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </LayoutGroup>
                            </div>

                            {/* --- FOOTER: High-Contrast --- */}
                            <div className="px-6 pb-3 pt-1">
                                <div className="bg-gray-50 rounded-lg p-2 mb-2 space-y-1">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400 uppercase tracking-widest text-[0.55rem] font-800">Shipping</span>
                                        <span className="text-black text-[0.7rem] font-600">$0.00</span>
                                    </div>
                                    <div className="flex justify-between items-end pt-1">
                                        <span className="font-syne text-[1.1rem] font-800 text-black uppercase tracking-tighter">Total</span>
                                        <span className=" text-[1.4rem] font-800 font-semibold leading-none">${subtotal.toFixed(2)}</span>
                                    </div>
                                </div>

                                <button className="group relative w-full h-12 bg-black text-white rounded-lg overflow-hidden transition-all active:scale-[0.98]">
                                    <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <div className="relative z-10 flex items-center justify-center gap-3">
                                        <span className="font-syne text-[0.8rem] font-700 uppercase tracking-[0.15em]">Checkout Now</span>
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </button>

                                <div className="mt-4 flex items-center justify-center gap-1.5 text-[0.55rem] font-800 text-green-800 uppercase tracking-widest">
                                    <ShieldCheck size={12} className="text-green-500/50" />
                                    Secure Encryption Enabled
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Cart;