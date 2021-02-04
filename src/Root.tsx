import { BrowserRouter } from 'react-router-dom';

import Routes from 'routing/Routes';
import AppLayout from 'AppLayout';

import 'index.scss';

const Root = () => (
  <BrowserRouter>
    <AppLayout>
      <Routes />
    </AppLayout>
  </BrowserRouter>
);

export default Root;
