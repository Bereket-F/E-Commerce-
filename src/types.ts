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