import { PropsWithChildren, ReactNode } from 'react';
import Header from './Header/Header';

const AppLayout = ({ children }: PropsWithChildren<ReactNode>) => (
  <>
    <Header />
    <div>{children}</div>
  </>
);

export default AppLayout;
