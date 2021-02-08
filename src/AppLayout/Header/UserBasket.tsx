import { headerTestIds } from 'src/testUtils/const/testIds';

interface UserBasketProps {
  itemsInBasket: number;
  totalPriceBasket: number;
}

const UserBasket = ({ itemsInBasket, totalPriceBasket }: UserBasketProps) => (
  <span data-testid={headerTestIds.numberInBasket}>
    {totalPriceBasket > 0
      ? `Basket (${itemsInBasket} items, £${totalPriceBasket})`
      : `Basket (${itemsInBasket} items)`}
  </span>
);

export default UserBasket;
