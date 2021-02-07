import { headerTestIds } from 'src/testUtils/const/testIds';

interface UserBasketProps {
  itemsInBasket: number;
}

const UserBasket = ({ itemsInBasket }: UserBasketProps) => (
  <span data-testid={headerTestIds.numberInBasket}>
    Basket ({itemsInBasket} items)
  </span>
);

export default UserBasket;
