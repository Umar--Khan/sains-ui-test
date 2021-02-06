import { useState } from 'react';
import { Product } from 'views/Store/Store.d';

const useBasket = () => {
  const [basketData, setBasketData] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setBasketData([...basketData, product]);
  };

  const removeProduct = (productId: string) => {
    const filteredBasketData = basketData.filter(
      product => product.productId === productId,
    );
    setBasketData(filteredBasketData);
  };

  return { addProduct, removeProduct };
};

export default useBasket;
