"use client";

import { CartStoreActionType, CartStoreStateType } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionType>()(
    persist(
    (set) => ({
    cart: [],
    hasHydration: false,
    addToCart: (product) => set((state) => {
        const existingIndex = state.cart.findIndex(p => 
            p.id === product.id &&
            p.SelectedSize === product.SelectedSize &&
            p.SelectedColor === product.SelectedColor
        )

        if (existingIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingIndex].Quantity += product.Quantity || 1;
            return { cart: updatedCart };
        }

        return { cart: [...state.cart,
             {...product,
                Quantity: product.Quantity || 1,
                SelectedSize: product.SelectedSize,
                SelectedColor: product.SelectedColor

             }] }
    }), 
    removeFromcart : (product) => set((state) => 
        ({ cart: state.cart.filter((item) => !(
            item.id === product.id &&
            item.SelectedSize === product.SelectedSize &&
            item.SelectedColor === product.SelectedColor
        )) })),
    clearCart: () => set((state) => ({ cart: [] })),
}),
    {
    name: "cart",
    storage: createJSONStorage(() => localStorage),
    onRehydrateStorage: () => (state) => {
        if (state) {
            state.hasHydration = true;
        }
    }})
);

export default useCartStore;