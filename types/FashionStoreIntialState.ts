export interface FashionStoreFashion {
    id: number,
    currency: string,
    caption: string,
    image_path: string,
    image: string,
    size: string,
    brand: string,
    price: number,
}

export interface FashionStoreInitialState {
    fashion: FashionStoreFashion[];
}
