import { PropsWithChildren, ReactNode } from 'react';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const AppLayout = ({ children }: PropsWithChildren<ReactNode>) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export default AppLayout;
