"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import {
    ShieldCheck, ArrowLeft, CreditCard,
    CheckCircle2, ChevronRight, ShoppingBag,
    Sparkles
} from 'lucide-react';
import Link from 'next/link';

const Checkout = () => {
    // Fallback for demo purposes if Redux isn't wrapped
    const cartState = useSelector((state) => state.cart);
    const items = cartState?.items || [];

    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

    const [step, setStep] = useState(1);
    const [address, setAddress] = useState({ street: '', city: '', zip: '' });
    const [paymentMethod, setPaymentMethod] = useState('card');

    const shippingRate = useMemo(() => {
        if (!address.zip) return 0;
        return (address.zip.length % 2 === 0 ? 12.50 : 0);
    }, [address.zip]);

    const total = subtotal + shippingRate;

    const handleNext = () => setStep(step + 1);

    // --- EMPTY STATE RESPONSIVE ---
    if (items.length === 0 && step !== 3) {
        return (
            <div className="min-h-[90vh] flex flex-col items-center justify-center font-inter px-4 md:px-6 text-center">
                <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
                    <ShoppingBag className="w-12 h-12 md:w-16 md:h-16 text-neutral-200 mb-6 mx-auto" />
                </motion.div>
                <h2 className="font-syne text-xl md:text-3xl font-800 uppercase tracking-tighter text-black">
                    Your bag is empty
                </h2>
                <p className="text-neutral-400 mt-2 text-xs md:text-base font-500 uppercase tracking-widest max-w-62.5 md:max-w-none mx-auto">
                    Secure some units before checking out.
                </p>
                <Link
                    href="/shop/supplements"
                    className="mt-8 px-8 md:px-10 py-3 md:py-4 bg-black text-white rounded-full text-[9px] md:text-[10px] font-800 uppercase tracking-[0.25em] hover:bg-neutral-800 transition-all"
                >
                    Return to shop
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fafafa] font-inter py-6 md:py-10 px-4 md:px-8 overflow-x-hidden">
            <div className="max-w-6xl mx-auto">

                {/* --- TOP NAVIGATION BAR --- */}
                <div className="flex items-center justify-between mb-8 md:mb-12">
                    <Link
                        href="/shop/supplements"
                        className="group flex items-center gap-2 md:gap-3 text-black hover:text-neutral-500 transition-colors"
                    >
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:-translate-x-1 transition-transform bg-white">
                            <ArrowLeft size={16} className="md:w-4.5 md:h-4.5" />
                        </div>
                        <span className="text-[10px] md:text-xs font-900 uppercase tracking-[0.15em] md:tracking-[0.2em]">
                            Back to Shop
                        </span>
                    </Link>

                    <div className="hidden md:block">
                        <span className="text-[10px] font-700 text-neutral-300 uppercase tracking-[0.3em]">
                            Secure Node 01
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">

                    {/* --- LEFT SIDE: FORMS (Mobile: Order 1, Desktop: Order 1) --- */}
                    <div className="lg:col-span-7 order-1">

                        {/* Progress Tracker */}
                        <div className="flex items-center gap-2 md:gap-4 mb-8 md:mb-10">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex-1 flex flex-col gap-2">
                                    <div className={`h-1 md:h-1.5 rounded-full transition-all duration-700 ${step >= i ? 'bg-black' : 'bg-neutral-200'}`} />
                                    <span className={`text-[8px] md:text-[9px] font-900 uppercase tracking-tighter ${step >= i ? 'text-black' : 'text-neutral-300'}`}>
                                        Step 0{i}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            {/* --- STEP 1: SHIPPING --- */}
                            {step === 1 && (
                                <motion.div
                                    key="shipping"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    className="space-y-6 md:space-y-8"
                                >
                                    <header>
                                        <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl font-900 uppercase tracking-tighter leading-[0.9]">
                                            Shipping<br />Details
                                        </h1>
                                        <p className="text-neutral-400 text-[10px] md:text-sm mt-3 md:mt-4 font-500 uppercase tracking-widest italic">
                                            Encrypted Delivery Logistics
                                        </p>
                                    </header>

                                    <div className="space-y-3 md:space-y-4">
                                        <div className="space-y-1.5 md:space-y-2">
                                            <label className="text-[9px] font-900 uppercase tracking-widest text-neutral-400 ml-1">
                                                Street Address
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="123 Cyber Lane"
                                                // text-base on mobile prevents iOS zoom
                                                className="w-full bg-white border border-neutral-200 rounded-xl md:rounded-2xl px-4 py-4 md:px-6 md:py-5 focus:border-black outline-none transition-all text-base md:text-sm font-700 shadow-sm appearance-none"
                                                value={address.street}
                                                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                            <div className="space-y-1.5 md:space-y-2">
                                                <label className="text-[9px] font-900 uppercase tracking-widest text-neutral-400 ml-1">
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Metropolis"
                                                    className="w-full bg-white border border-neutral-200 rounded-xl md:rounded-2xl px-4 py-4 md:px-6 md:py-5 focus:border-black outline-none transition-all text-base md:text-sm font-700 shadow-sm appearance-none"
                                                    value={address.city}
                                                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-1.5 md:space-y-2">
                                                <label className="text-[9px] font-900 uppercase tracking-widest text-neutral-400 ml-1">
                                                    ZIP Code
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="90210"
                                                    inputMode="numeric"
                                                    className="w-full bg-white border border-neutral-200 rounded-xl md:rounded-2xl px-4 py-4 md:px-6 md:py-5 focus:border-black outline-none transition-all text-base md:text-sm font-700 shadow-sm appearance-none"
                                                    value={address.zip}
                                                    onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleNext}
                                        disabled={!address.street || !address.zip}
                                        className="w-full h-16 md:h-20 bg-black text-white rounded-xl md:rounded-2xl font-syne font-800 uppercase text-xs md:text-sm tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-neutral-800 active:scale-[0.98] transition-all disabled:opacity-20 disabled:active:scale-100"
                                    >
                                        Verify & Proceed <ChevronRight size={16} className="md:w-4.5 md:h-4.5" />
                                    </button>
                                </motion.div>
                            )}

                            {/* --- STEP 2: PAYMENT --- */}
                            {step === 2 && (
                                <motion.div
                                    key="payment"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    className="space-y-6 md:space-y-8"
                                >
                                    <header>
                                        <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl font-900 uppercase tracking-tighter leading-[0.9]">
                                            Gateway<br />Selection
                                        </h1>
                                        <p className="text-neutral-400 text-[10px] md:text-sm mt-3 md:mt-4 font-500 uppercase tracking-widest italic">
                                            Secure Transaction Layer
                                        </p>
                                    </header>

                                    <div className="space-y-3">
                                        {[
                                            { id: 'card', name: 'Credit Card', desc: 'Secure Terminal', icon: <CreditCard size={20} /> },
                                            { id: 'crypto', name: 'Web3 Wallet', desc: 'ETH / USDC', icon: <div className="h-5 w-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">Ξ</div> },
                                            { id: 'apple', name: 'Apple Pay', desc: 'Touch ID Ready', icon: <span className="font-bold text-lg"></span> }
                                        ].map((method) => (
                                            <div
                                                key={method.id}
                                                onClick={() => setPaymentMethod(method.id)}
                                                className={`p-5 md:p-6 rounded-xl md:rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${paymentMethod === method.id ? 'border-black bg-white shadow-xl shadow-black/5' : 'border-neutral-100 bg-neutral-50/50 grayscale'}`}
                                            >
                                                <div className="flex items-center gap-4 md:gap-5">
                                                    <div className="text-black scale-90 md:scale-100">{method.icon}</div>
                                                    <div>
                                                        <span className="block font-900 text-[10px] md:text-xs uppercase tracking-widest">
                                                            {method.name}
                                                        </span>
                                                        <span className="block text-[8px] md:text-[9px] text-neutral-400 uppercase font-700 mt-0.5 md:mt-1 italic tracking-widest">
                                                            {method.desc}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={`h-5 w-5 md:h-6 md:w-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === method.id ? 'border-black bg-black' : 'border-neutral-200'}`}>
                                                    {paymentMethod === method.id && <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-white" />}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={handleNext}
                                        className="w-full h-16 md:h-20 bg-black text-white rounded-xl md:rounded-2xl font-syne font-800 uppercase text-xs md:text-sm tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-neutral-800 active:scale-[0.98] transition-all"
                                    >
                                        Authorize Payment <ShieldCheck size={16} className="md:w-4.5 md:h-4.5" />
                                    </button>
                                </motion.div>
                            )}

                            {/* --- STEP 3: SUCCESS --- */}
                            {step === 3 && (
                                <motion.div
                                    key="success"
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center py-10 md:py-20 space-y-6 md:space-y-8"
                                >
                                    <div className="flex justify-center">
                                        <div className="h-20 w-20 md:h-24 md:w-24 bg-black rounded-full flex items-center justify-center text-white shadow-2xl">
                                            <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="font-syne text-4xl md:text-7xl font-900 uppercase tracking-tighter">
                                            Success.
                                        </h1>
                                        <p className="text-neutral-500 max-w-70 md:max-w-sm mx-auto text-[10px] md:text-sm mt-3 md:mt-4 font-500 uppercase tracking-widest leading-relaxed">
                                            Your order is authorized. Digital receipt sent to your terminal.
                                        </p>
                                    </div>
                                    <Link
                                        href="/shop/supplements"

                                        className="px-10 py-4 md:px-12 md:py-5 bg-black text-white rounded-full font-syne font-800 uppercase text-[9px] md:text-[10px] tracking-[0.3em] hover:scale-105 transition-transform"
                                    >
                                        Return Home
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* --- RIGHT SIDE: SUMMARY (Mobile: Order 2, Desktop: Order 2) --- */}
                    <div className="lg:col-span-5 order-2">
                        <div className="lg:sticky lg:top-12 bg-white rounded-3xl md:rounded-[40px] border border-neutral-100 p-6 md:p-8 shadow-sm space-y-6 md:space-y-8">

                            <div className="flex items-center justify-between">
                                <h3 className="font-syne text-base md:text-lg font-900 uppercase tracking-tighter">
                                    Manifest
                                </h3>
                                <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-black animate-pulse" />
                            </div>

                            <div className="space-y-4 md:space-y-6 max-h-62.5 md:max-h-75 overflow-y-auto pr-2 scrollbar-hide">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4 md:gap-5 items-center">
                                        <div className="h-12 w-12 md:h-16 md:w-16 bg-neutral-100 rounded-xl md:rounded-2xl overflow-hidden shrink-0">
                                            <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-[9px] md:text-[10px] font-900 uppercase truncate tracking-tight text-black">
                                                {item.name}
                                            </h4>
                                            <p className="text-[8px] md:text-[9px] text-neutral-400 font-700 mt-1 uppercase tracking-widest">
                                                Unit Count: {item.qty}
                                            </p>
                                        </div>
                                        <p className="font-syne text-[10px] md:text-xs font-900">
                                            ${(item.price * item.qty).toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 md:pt-8 border-t border-neutral-50 space-y-3 md:space-y-4">
                                <div className="flex justify-between text-[9px] md:text-[10px] font-800 uppercase text-neutral-400 tracking-[0.2em]">
                                    <span>Subtotal</span>
                                    <span className="text-black">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-[9px] md:text-[10px] font-800 uppercase text-neutral-400 tracking-[0.2em]">
                                    <span className="flex items-center gap-2 italic underline decoration-neutral-200">
                                        Logistics
                                    </span>
                                    <span className={`${shippingRate === 0 ? 'text-black font-900' : 'text-black'}`}>
                                        {shippingRate === 0 ? "FREE" : `$${shippingRate.toFixed(2)}`}
                                    </span>
                                </div>
                                <div className="flex justify-between items-baseline pt-2 md:pt-4">
                                    <span className="font-syne text-xl md:text-2xl font-900 uppercase italic tracking-tighter">
                                        Total
                                    </span>
                                    <span className="text-3xl md:text-4xl font-900 tracking-tighter leading-none">
                                        ${total.toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            {/* Reward Nudge */}
                            <div className="bg-neutral-50 rounded-xl md:rounded-2xl p-4 md:p-5 border border-neutral-100">
                                <div className="flex gap-3 md:gap-4 items-center">
                                    <Sparkles size={14} className="text-black md:w-4 md:h-4" />
                                    <p className="text-[8px] md:text-[9px] font-700 text-black leading-relaxed uppercase tracking-widest">
                                        Earning <span className="font-900 px-1.5 py-0.5 bg-black text-white rounded ml-1">420 XP</span> for this drop.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;