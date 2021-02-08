import { useEffect, useState, useContext } from 'react';

import useAxios from 'src/hooks/useAxios';
import { BasketContext } from 'src/context/BasketContext';
import endpoints from 'src/const/endpoints';
import { storeTestIds } from 'src/testUtils/const/testIds';
import { Product, BasketProduct } from './Store.d';
import ProductCard from './ProductCard';

const STORE_ERROR_MESSAGE =
  'We are having problems loading the store. Please check back later.';

const Store = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const { data, error, isLoading } = useAxios({
    url: endpoints.getProducts,
  });

  const { basketLocal, setBasketLocal } = useContext(BasketContext);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const handleAddToBasket = (newProduct: Product) => {
    const isProductInBasket = basketLocal.some(
      ({ productDetail: { productId } }: BasketProduct) =>
        productId === newProduct.productId,
    );

    if (!isProductInBasket) {
      return setBasketLocal([
        ...basketLocal,
        { productDetail: newProduct, quantity: 1 },
      ]);
    }

    const updatedBasket = basketLocal.map(
      ({ productDetail, quantity }: BasketProduct) => {
        if (productDetail.productId === newProduct.productId) {
          return { productDetail, quantity: quantity + 1 };
        }
        return { productDetail, quantity };
      },
    );

    setBasketLocal(updatedBasket);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{STORE_ERROR_MESSAGE}</div>;

  return (
    <>
      {products ? (
        products.map(product => (
          <ProductCard
            product={product}
            handleOnClick={handleAddToBasket}
            key={product.productId}
            data-testid={storeTestIds.productCard}
          />
        ))
      ) : (
        <h1>{STORE_ERROR_MESSAGE}</h1>
      )}
    </>
  );
};
export default Store;
