import { BrowserRouter } from 'react-router-dom';

import Routes from 'src/routing/Routes';
import AppLayout from 'src/AppLayout';
import { BasketProvider } from 'src/context/BasketContext';

import 'src/index.scss';

const Root = () => (
  <BrowserRouter>
    <BasketProvider>
      <AppLayout>
        <Routes />
      </AppLayout>
    </BasketProvider>
  </BrowserRouter>
);

export default Root;
