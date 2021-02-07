import Card from 'src/shared/Card/Card';
import { Button } from 'src/shared/Buttons';
import { BasketProduct } from '../Store/Store.d';

export interface ReviewCardProps {
  basketProduct: BasketProduct;
  handleOnClick: (arg: BasketProduct) => void;
}

const ReviewCard = ({
  basketProduct,
  handleOnClick,
  ...rest
}: ReviewCardProps) => {
  const {
    productDetail: { sku, image, title, price },
    quantity,
  } = basketProduct;
  return (
    <Card key={sku} {...rest}>
      <img src={image} alt={title} />
      <p>
        {title}, &#163;{price}
      </p>
      <p>Qty: {quantity}</p>
      <Button onClick={() => handleOnClick(basketProduct)}>
        Remove from basket
      </Button>
    </Card>
  );
};

export default ReviewCard;
