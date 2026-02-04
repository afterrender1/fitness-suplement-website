import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [], // { id, name, price, image, qty }
    isOpen: false, // Control drawer visibility globally
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Toggle the cart open/close state
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        },

        addToCart: (state, action) => {
            const item = action.payload;
            const existing = state.items.find((i) => i.id === item.id);

            if (existing) {
                existing.qty += 1;
            } else {
                state.items.push({ ...item, qty: 1 });
            }
            // Optional: Auto-open cart when adding an item
            state.isOpen = true;
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },

        increaseQty: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item) item.qty += 1;
        },

        decreaseQty: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item && item.qty > 1) {
                item.qty -= 1;
            } else if (item && item.qty === 1) {
                // Optional: Remove item if qty hits 0
                state.items = state.items.filter((i) => i.id !== action.payload);
            }
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const {
    toggleCart,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;