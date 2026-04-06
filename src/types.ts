import { z } from "zod";

export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];   
    colors: string[];
    images: Record<string, string>;
}

export type ProductsType = ProductType[]

export type CartItemType = ProductType & {
    Quantity: number;
    SelectedSize: string;
    SelectedColor: string;
}

export type CartItemsType = CartItemType[]

export const ShippingInfoSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: 
    z.string()
    .min(7, "Phone number must be between 7 and 10 digits").
    max(10, "Phone number must be between 7 and 10 digits").
    regex(/^\d+$/, "Phone number must contain only digits"),
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
})

export type ShippingInfoType = z.infer<typeof ShippingInfoSchema>

export const PaymentInfoSchema = z.object({
    cardHolder: z.string().min(1, "Card holder is required"),
    cardNumber: z.string().min(16, "Card number must be 16 digits").max(16, "Card number must be 16 digits").regex(/^\d+$/, "Card number must contain only digits"),
    expireDate: 
    z.string().
    regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expire date must be in MM/YY format"),
    cvv: z.string().min(3, "CVV is required").max(3, "CVV must be 3 digits"),
})

export type PaymentInfoType = z.infer<typeof PaymentInfoSchema>

export type CartStoreStateType = {
   cart: CartItemType[];
}

export type CartStoreActionType = {
    addToCart: (product: CartItemType) => void;
    removeFromcart: (product: CartItemType) => void;
    clearCart: () => void;
}