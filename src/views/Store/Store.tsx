import { useEffect, useState, useContext } from 'react';

import useResource from 'hooks/useResource';
import { Product, SelectedProduct } from './Store.d';
import Card from 'shared/Card/Card';
import { Button } from 'shared/Buttons/';
import endpoints from 'const/endpoints';
import { BasketContext } from 'context/BasketContext';

const Store = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const { data, error, isLoading } = useResource({
    url: endpoints.getProducts,
  });

  const { basketLocal, setBasketLocal } = useContext(BasketContext);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const handleAddToBasket = (newProduct: Product) => {
    const isProductInBasket = basketLocal.some(
      (product: SelectedProduct) =>
        product.product.productId === newProduct.productId,
    );

    if (!isProductInBasket) {
      return setBasketLocal([
        ...basketLocal,
        { product: newProduct, quantity: 1 },
      ]);
    }

    const updatedBasket = basketLocal.map(
      ({ product, quantity }: SelectedProduct) => {
        if (product.productId === newProduct.productId) {
          return { product, quantity: quantity + 1 };
        }
        return { product, quantity };
      },
    );

    setBasketLocal(updatedBasket);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      {products?.map(product => (
        <Card key={product.sku}>
          <img src={product.image} alt={product.title} />
          <p>
            {product.title}, &#163;{product.price}
          </p>
          <Button onClick={() => handleAddToBasket(product)}>
            Add to basket
          </Button>
        </Card>
      ))}
    </>
  );
};
export default Store;
