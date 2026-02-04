"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "@/app/store/cartSlice";

const Cart = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    // 1. Get items from Redux store
    const items = useSelector((state) => state.cart.items);

    // 2. Calculate Total
    const total = items.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    const sidebarVariants = {
        closed: { x: "100%", transition: { type: "spring", damping: 30, stiffness: 300 } },
        open: { x: 0, transition: { type: "spring", damping: 25, stiffness: 200 } }
    };

    const contentVariants = {
        closed: { opacity: 0, y: 20 },
        open: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4 } }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-60 bg-black/40 backdrop-blur-[2px]"
                    />

                    {/* Cart Sidebar */}
                    <motion.div
                        variants={sidebarVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed right-0 top-0 z-70 h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <motion.h2 variants={contentVariants} className="text-2xl font-semibold text-gray-800">
                                Shopping Cart ({items.length})
                            </motion.h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Body - Dynamic Items */}
                        <motion.div variants={contentVariants} className="p-6 flex-1 overflow-y-auto">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <p className="text-gray-500">Your cart is empty.</p>
                                    <button onClick={onClose} className="mt-4 text-blue-600 font-medium">Continue Shopping</button>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                                            <img src={item.image} className="w-20 h-20 object-contain bg-gray-50 rounded-lg" alt={item.name} />

                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                                                <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>

                                                <div className="flex items-center gap-3 mt-3">
                                                    <div className="flex items-center border rounded-lg px-1">
                                                        <button
                                                            onClick={() => dispatch(decreaseQty(item.id))}
                                                            className="p-1 hover:text-blue-600 transition-colors"
                                                        >
                                                            <Minus size={16} />
                                                        </button>
                                                        <span className="px-3 min-w-7.5 text-center font-medium">{item.qty}</span>
                                                        <button
                                                            onClick={() => dispatch(increaseQty(item.id))}
                                                            className="p-1 hover:text-blue-600 transition-colors"
                                                        >
                                                            <Plus size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => dispatch(removeFromCart(item.id))}
                                                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <motion.div variants={contentVariants} className="p-6 border-t bg-gray-50">
                                <div className="flex justify-between mb-4">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="text-xl font-bold">${total.toFixed(2)}</span>
                                </div>
                                <button className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-all active:scale-[0.98]">
                                    Checkout • ${total.toFixed(2)}
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Cart;