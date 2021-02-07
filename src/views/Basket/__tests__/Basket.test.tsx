import { basketTestIds } from 'src/testUtils/const/testIds';
import { renderWithBasketContext } from 'src/testUtils/helpers';
import { mockedLocalStorageBasketProducts } from 'src/testUtils/mocks/localStorageBasketProducts';
import Basket from '../Basket';

describe('<Basket />', () => {
  it('Should render correct amount of products', () => {
    const basketContextValue = {
      basketLocal: mockedLocalStorageBasketProducts,
      setBasketLocal: jest.fn(),
    };

    const { getAllByTestId } = renderWithBasketContext(
      basketContextValue,
      <Basket />,
    );

    const productsInBasket = getAllByTestId(basketTestIds.reviewCard);
    expect(productsInBasket).toHaveLength(3);
  });

  it('Should render error message if no products in localstorage', () => {
    const basketContextValue = {
      basketLocal: [],
      setBasketLocal: jest.fn(),
    };

    const { queryAllByTestId, getByTestId } = renderWithBasketContext(
      basketContextValue,
      <Basket />,
    );

    const productsInBasket = queryAllByTestId(basketTestIds.reviewCard);
    expect(productsInBasket).toHaveLength(0);

    const emptyBasketMessage = getByTestId(basketTestIds.emptyBasketMessage);
    expect(emptyBasketMessage).toBeInTheDocument();
  });
});
