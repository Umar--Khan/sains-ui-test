import Card from 'src/shared/Card/Card';
import { Button } from 'src/shared/Buttons';
import { Product } from './Store.d';
import styled from 'styled-components';

export interface ProductCardProps {
  product: Product;
  handleOnClick: (arg: Product) => void;
}

const Sku = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductCard = ({ product, handleOnClick, ...rest }: ProductCardProps) => (
  <Card key={product.sku} {...rest}>
    <Img src={product.image} alt={product.title} />
    <p>
      {product.title}, <Sku>{product.sku}</Sku>
    </p>
    <p>&#163;{product.price}</p>
    <Button onClick={() => handleOnClick(product)}>Add to basket</Button>
  </Card>
);

export default ProductCard;
