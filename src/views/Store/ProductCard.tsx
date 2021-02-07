import Card from 'src/shared/Card/Card';
import { Button } from 'src/shared/Buttons';
import { Product } from './Store.d';

export interface ProductCardProps {
  product: Product;
  handleOnClick: (arg: Product) => void;
}

const ProductCard = ({ product, handleOnClick, ...rest }: ProductCardProps) => (
  <Card key={product.sku} {...rest}>
    <img src={product.image} alt={product.title} />
    <p>
      {product.title}, &#163;{product.price}
    </p>
    {/*<label htmlFor='qty'>Qty:</label>*/}
    {/*<Select*/}
    {/*  name='qty'*/}
    {/*  options={quantityOptions}*/}
    {/*  onChange={() => {*/}
    {/*    console.log();*/}
    {/*  }}*/}
    {/*  value={'1'}*/}
    {/*/>*/}
    <Button onClick={() => handleOnClick(product)}>Add to basket</Button>
  </Card>
);

export default ProductCard;
