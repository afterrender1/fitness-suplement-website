"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from "lucide-react";

const Cart = ({ isOpen, onClose }) => {
    // Animation Variants for cleaner code
    const sidebarVariants = {
        closed: {
            x: "100%",
            transition: { type: "spring", damping: 30, stiffness: 300 }
        },
        open: {
            x: 0,
            transition: { type: "spring", damping: 25, stiffness: 200 }
        }
    };

    const contentVariants = {
        closed: { opacity: 0, y: 20 },
        open: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.4 }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay / Backdrop */}
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
                            <motion.h2
                                variants={contentVariants}
                                className="text-2xl font-semibold text-gray-800"
                            >
                                Shopping Cart
                            </motion.h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Body - Content staggers in */}
                        <motion.div
                            variants={contentVariants}
                            className="p-6 flex-1"
                        >
                            <p className="text-gray-500">Your items will appear here.</p>
                        </motion.div>

                        {/* Footer Example */}
                        <motion.div
                            variants={contentVariants}
                            className="p-6 border-t bg-gray-50"
                        >
                            <button className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                                Checkout Now
                            </button>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Cart;