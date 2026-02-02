import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Inter, Poppins } from "next/font/google"; // Importing Inter

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["600", "700"], subsets: ["latin"] });
export default function InfoModal({ isOpen, onClose, title = "Info", message, size = "sm" }) {
    const sizeClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black z-40"
                    />

                    {/* Modal */}
                    <motion.div
                        key="modal"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className={`fixed z-50 inset-0 flex items-center justify-center px-4`}
                    >
                        <div className={`bg-white rounded-lg shadow-lg p-6 sm:p-8 ${sizeClasses[size]} w-full relative`}>
                            {/* Title */}
                            <h2 className={`text-lg sm:text-xl font-bold text-gray-900 mb-4 ${poppins.className}`}>{title}</h2>

                            {/* Message */}
                            <p className={`text-gray-700 text-sm sm:text-base mb-6 ${inter.className}`}>{message}</p>

                            {/* OK Button */}
                            <button
                                onClick={onClose}
                                className={`bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-lg transition ${inter.className}`}
                            >
                                OK
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// Example usage:

export function Example() {
    const [open, setOpen] = useState(false);

    return (
        <div className="p-8">
            <button
                onClick={() => setOpen(true)}
                className="bg-teal-500 text-white px-4 py-2 rounded-lg"
            >
                Show Modal
            </button>

            <InfoModal
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Important Info"
                message="This is a simple informational modal. Click OK to close."
                size="md"
            />
        </div>
    );
}
