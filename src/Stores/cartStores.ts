"use client";

import { CartStoreActionType, CartStoreStateType } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionType>()(
    persist(
    (set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })), 
    removeFromcart : (product) => set((state) => ({ cart: state.cart.filter((item) => item.id !== product.id) })),
    clearCart: () => set((state) => ({ cart: [] })),
}),
    {
    name: "cart",
    storage: createJSONStorage(() => localStorage)
    })
);

export default useCartStore;