import { PropsWithChildren, ReactNode } from 'react';

const Card = ({ children }: PropsWithChildren<ReactNode>) => (
  <div>{children}</div>
);

export default Card;
