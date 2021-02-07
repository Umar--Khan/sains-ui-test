import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { BasketContext, BasketWrapper } from 'src/context/BasketContext';

export const withRouter = (children: any) => (
  <MemoryRouter>{children}</MemoryRouter>
);

export const renderWithBasketContext = (value: BasketWrapper, children: any) =>
  render(
    <BasketContext.Provider value={value}>
      {withRouter(children)}
    </BasketContext.Provider>,
  );
