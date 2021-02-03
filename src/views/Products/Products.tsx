import { useEffect, useState } from 'react';

import useResource from 'hooks/useResource';
import { ProductValues } from './Products.d';
import Card from 'shared/Card/Card';
import { Button } from 'shared/Buttons/';
import endpoints from 'const/endpoints';

const Products = () => {
  const [products, setProducts] = useState<ProductValues[] | null>(null);
  const { data, error, isLoading } = useResource({
    url: endpoints.getProducts,
  });

  useEffect(() => {
    setProducts(data);
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      {products?.map(product => (
        <Card key={product.sku}>
          <img src={product.image} alt={product.title} />
          <p>
            {product.title}, &#163;{product.price}
          </p>
          <Button>Add to basket</Button>
        </Card>
      ))}
    </>
  );
};
export default Products;
