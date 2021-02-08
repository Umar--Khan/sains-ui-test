import Card from 'src/shared/Card/Card';
import { Button } from 'src/shared/Buttons';
import { BasketProduct } from '../Store/Store.d';
import { ChangeEvent } from 'react';

export interface ReviewCardProps {
  basketProduct: BasketProduct;
  handleOnClick: (arg: BasketProduct) => void;
  handleQtySelect: (
    event: ChangeEvent<HTMLSelectElement>,
    productId: string,
  ) => void;
}

const ReviewCard = ({
  basketProduct,
  handleOnClick,
  handleQtySelect,
  ...rest
}: ReviewCardProps) => {
  const {
    productDetail: { image, title, price, productId },
    quantity,
  } = basketProduct;

  const renderQtyOptions = () => {
    const optionsArr = Array.from(Array(quantity + 5).keys());

    return optionsArr.map(
      quantity =>
        quantity >= 1 && (
          <option value={quantity} key={quantity}>
            {quantity}
          </option>
        ),
    );
  };
  return (
    <Card key={productId} {...rest}>
      <img src={image} alt={title} />
      <p>
        {title}, &#163;{price}
      </p>
      <p>
        Qty:{' '}
        <select onChange={e => handleQtySelect(e, productId)} value={quantity}>
          {renderQtyOptions()}
        </select>
      </p>

      <p>Total price: &#163;{(quantity * price).toFixed(2)}</p>
      <Button onClick={() => handleOnClick(basketProduct)}>
        Remove from basket
      </Button>
    </Card>
  );
};

export default ReviewCard;
