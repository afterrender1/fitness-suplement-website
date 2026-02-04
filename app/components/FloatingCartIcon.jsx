"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "@/app/store/cartSlice";

const FloatingCartIcon = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const itemCount = items.reduce((total, item) => total + item.qty, 0);

    return (
        <motion.div
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => dispatch(toggleCart())}
            className="fixed bottom-17 right-4 lg:bottom-8 lg:right-8 z-50 cursor-pointer rounded-full bg-black p-3 shadow-[0_20px_50px_rgba(0,0,0,0.2)] group"
        >
            <AnimatePresence mode="popLayout">
                {itemCount > 0 && (
                    <motion.div
                        key={itemCount}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -right-2 -top-2 flex h-6 min-w-6 px-1 items-center justify-center rounded-full bg-[#93D2D9] text-[11px] font-black text-black border-2 border-white"
                    >
                        {itemCount}
                    </motion.div>
                )}
            </AnimatePresence>

            <ShoppingBag className="text-white group-hover:text-[#93D2D9] transition-colors h-5 w-5 lg:h-6 lg:w-6" strokeWidth={2.5} />
        </motion.div>
    );
};

export default FloatingCartIcon;