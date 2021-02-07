import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { BasketProduct } from 'src/views/Store/Store.d';
import { BasketContext } from 'src/context/BasketContext';
import { ROUTES_MAP } from 'src/const/routes';
import { basketTestIds } from 'src/testUtils/const/testIds';
import ReviewCard from './ReviewCard';

const EMPTY_BASKET_MESSAGE =
  'Your basket is currently empty. Continue browsing ';

const Basket = () => {
  const { basketLocal, setBasketLocal } = useContext(BasketContext);

  const handleRemoveFromBasket = (productToRemove: BasketProduct) => {
    const updatedBasket = basketLocal.filter(
      product =>
        product.productDetail.productId !==
        productToRemove.productDetail.productId,
    );

    setBasketLocal(updatedBasket);
  };

  return (
    <>
      {basketLocal.length ? (
        basketLocal.map((basketProduct: BasketProduct) => (
          <ReviewCard
            key={basketProduct.productDetail.productId}
            basketProduct={basketProduct}
            handleOnClick={handleRemoveFromBasket}
            data-testid={basketTestIds.reviewCard}
          />
        ))
      ) : (
        <h1 data-testid={basketTestIds.emptyBasketMessage}>
          {EMPTY_BASKET_MESSAGE}
          <Link to={ROUTES_MAP.STORE}>here</Link>.
        </h1>
      )}
    </>
  );
};

export default Basket;
