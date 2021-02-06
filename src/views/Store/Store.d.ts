export interface Product {
  productId: string;
  sku: string;
  title: string;
  price: number;
  image: string;
}

export interface SelectedProduct {
  quantity: number;
  product: Product;
}
