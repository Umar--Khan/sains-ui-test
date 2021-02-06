import { useContext } from 'react';

import Card from 'shared/Card/Card';
import { Button } from 'shared/Buttons';
import { Product, SelectedProduct } from 'views/Store/Store.d';
import { BasketContext } from 'context/BasketContext';

const Basket = () => {
  const { basketLocal } = useContext(BasketContext);

  const handleRemoveFromBasket = (product: Product) => {
    console.log(product);
  };

  return (
    <>
      {basketLocal ? (
        basketLocal.map(({ product, quantity }: SelectedProduct) => (
          <Card key={product.sku}>
            <img src={product.image} alt={product.title} />
            <p>
              {product.title}, &#163;{product.price}
            </p>
            <p>Qty: {quantity}</p>
            <Button onClick={() => handleRemoveFromBasket(product)}>
              Remove from basket
            </Button>
          </Card>
        ))
      ) : (
        <p>Add something to the basket</p>
      )}
    </>
  );
};

export default Basket;
