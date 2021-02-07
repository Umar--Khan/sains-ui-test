import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import useResource from 'src/hooks/useResource';
import { mockedGetProducts } from 'src/testUtils/mocks/getProducts';
import { storeTestIds } from 'src/testUtils/const/testIds';
import Store from '../Store';

jest.mock('src/hooks/useResource');

describe('<Store />', () => {
  describe('<Store /> Snapshots', () => {
    it('Setup', () => {
      useResource.mockReturnValue({
        data: mockedGetProducts,
        isLoading: false,
        error: false,
      });

      renderer.create(<Store />);
    });

    it('Should render snapshot correctly', () => {
      useResource.mockReturnValue({
        data: mockedGetProducts,
        isLoading: false,
        error: false,
      });

      const component = renderer.create(<Store />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('Should render error snapshot correctly', () => {
      useResource.mockReturnValue({
        data: [],
        isLoading: false,
        error: true,
      });

      const component = renderer.create(<Store />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('Should render loading snapshot correctly', () => {
      useResource.mockReturnValue({
        data: [],
        isLoading: true,
        error: false,
      });

      const component = renderer.create(<Store />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  it('Should render correct amount of products', () => {
    useResource.mockReturnValue({
      data: mockedGetProducts,
    });
    const { getAllByTestId } = render(<Store />);
    const productCards = getAllByTestId(storeTestIds.productCard);

    expect(productCards).toHaveLength(mockedGetProducts.length);
  });
});
