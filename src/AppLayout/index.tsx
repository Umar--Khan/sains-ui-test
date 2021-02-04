import { PropsWithChildren, ReactNode } from 'react';

import Header from './Header/Header';
import Main from './Main/Main';

const AppLayout = ({ children }: PropsWithChildren<ReactNode>) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

export default AppLayout;
