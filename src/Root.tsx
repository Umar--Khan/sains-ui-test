import { BrowserRouter } from 'react-router-dom';

import Routes from 'routing/Routes';
import AppLayout from 'AppLayout';
import { BasketProvider } from 'context/BasketContext';

import 'index.scss';

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
