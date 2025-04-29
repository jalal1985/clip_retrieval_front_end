export interface FashionStoreFashion {
    id: number,
    url: string,
    caption: string,
    price: string,
    currency: string,
}

export interface FashionStoreInitialState {
    fashion: FashionStoreFashion[];
}
