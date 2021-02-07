import renderer from 'react-test-renderer';

import { mockedLocalStorageBasketProducts } from 'src/testUtils/mocks/localStorageBasketProducts';
import { renderWithBasketContext, withRouter } from 'src/testUtils/helpers';
import { headerTestIds } from 'src/testUtils/const/testIds';
import Header from '../Header';

jest.mock('src/hooks/useResource');

describe('<Header />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(withRouter(<Header />));
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should render 0 items in basket if theyre no items in local storage', () => {
    const { getByTestId } = renderWithBasketContext(
      {
        basketLocal: [],
        setBasketLocal: jest.fn(),
      },
      <Header />,
    );

    const basketItem = getByTestId(headerTestIds.numberInBasket);
    expect(basketItem.textContent).toEqual('Basket (0 items)');
  });

  it('Should render correct items number in basket if theyre items in local storage', () => {
    const { getByTestId } = renderWithBasketContext(
      {
        basketLocal: mockedLocalStorageBasketProducts,
        setBasketLocal: jest.fn(),
      },
      <Header />,
    );

    const basketItem = getByTestId(headerTestIds.numberInBasket);
    expect(basketItem.textContent).toEqual('Basket (8 items)');
  });
});
