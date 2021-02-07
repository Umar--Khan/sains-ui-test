export interface Product {
  productId: string;
  sku: string;
  title: string;
  price: number;
  image: string;
}

export interface BasketProduct {
  quantity: number;
  productDetail: Product;
}
