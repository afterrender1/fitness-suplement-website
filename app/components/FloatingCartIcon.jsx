"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from "lucide-react";

const FloatingCartIcon = ({ onClick, itemCount = 0 }) => {
    return (
        <motion.div
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="fixed bottom-8 right-8 z-50 cursor-pointer rounded-full bg-black p-4 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-shadow duration-300 group"
        >
            {/* Notification Badge */}
            <AnimatePresence mode="popLayout">
                {itemCount > 0 && (
                    <motion.div
                        key={itemCount} // Triggers animation on count change
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute -right-2 -top-2 flex h-6 min-w-6 px-1 items-center justify-center rounded-full bg-[#93D2D9] text-[11px] font-black text-black shadow-lg border-2 border-white"
                    >
                        {itemCount}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Icon with slight tilt effect on hover */}
            <motion.div
                whileHover={{ rotate: [-5, 5, 0] }}
                transition={{ duration: 0.3 }}
            >
                <ShoppingBag className="text-white group-hover:text-[#93D2D9] transition-colors" size={24} strokeWidth={2.5} />
            </motion.div>
        </motion.div>
    );
};

export default FloatingCartIcon;