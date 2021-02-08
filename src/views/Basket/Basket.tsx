import React, { ChangeEvent, useContext } from 'react';
import styled from 'styled-components';

import { BasketProduct } from 'src/views/Store/Store.d';
import { BasketContext } from 'src/context/BasketContext';
import { ROUTES_MAP } from 'src/const/routes';
import { basketTestIds } from 'src/testUtils/const/testIds';
import ReviewCard from './ReviewCard';
import Link from 'src/shared/Links/Link/Link';

const EMPTY_BASKET_MESSAGE =
  'Your basket is currently empty. Continue browsing ';

const BasketContainer = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
  }

  @media (min-width: 980px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
  }
`;

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

  const handleQtySelect = (
    e: ChangeEvent<HTMLSelectElement>,
    productId: string,
  ) => {
    const updatedBasket = basketLocal.map(basketProduct => {
      if (basketProduct.productDetail.productId === productId) {
        basketProduct.quantity = parseInt(e.target.value, 10);
      }
      return basketProduct;
    });

    setBasketLocal(updatedBasket);
  };

  return (
    <>
      <BasketContainer>
        {basketLocal.length >= 1 &&
          basketLocal.map((basketProduct: BasketProduct) => (
            <ReviewCard
              key={basketProduct.productDetail.productId}
              basketProduct={basketProduct}
              handleOnClick={handleRemoveFromBasket}
              data-testid={basketTestIds.reviewCard}
              handleQtySelect={handleQtySelect}
            />
          ))}
      </BasketContainer>
      {basketLocal.length === 0 && (
        <h1 data-testid={basketTestIds.emptyBasketMessage}>
          {EMPTY_BASKET_MESSAGE}
          <Link to={ROUTES_MAP.STORE}>here</Link>
        </h1>
      )}
    </>
  );
};

export default Basket;
