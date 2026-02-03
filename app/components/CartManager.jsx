"use client"
import React, { useState } from 'react';
import FloatingCartIcon from './FloatingCartIcon';
import Cart from './Cart';

export default function CartManager() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <FloatingCartIcon onClick={() => setIsOpen(true)} itemCount={1} />
            <Cart isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}