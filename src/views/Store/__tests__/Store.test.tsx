import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import useAxios from 'src/hooks/useAxios';
import { mockedGetProducts } from 'src/testUtils/mocks/getProducts';
import { storeTestIds } from 'src/testUtils/const/testIds';
import Store from '../Store';

jest.mock('src/hooks/useAxios');

describe('<Store />', () => {
  describe('<Store /> Snapshots', () => {
    it('Setup', () => {
      useAxios.mockReturnValue({
        data: mockedGetProducts,
        isLoading: false,
        error: false,
      });

      renderer.create(<Store />);
    });

    it('Should render snapshot correctly', () => {
      useAxios.mockReturnValue({
        data: mockedGetProducts,
        isLoading: false,
        error: false,
      });

      const component = renderer.create(<Store />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('Should render error snapshot correctly', () => {
      useAxios.mockReturnValue({
        data: [],
        isLoading: false,
        error: true,
      });

      const component = renderer.create(<Store />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('Should render loading snapshot correctly', () => {
      useAxios.mockReturnValue({
        data: [],
        isLoading: true,
        error: false,
      });

      const component = renderer.create(<Store />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  it('Should render correct amount of products', () => {
    useAxios.mockReturnValue({
      data: mockedGetProducts,
    });
    const { getAllByTestId } = render(<Store />);
    const productCards = getAllByTestId(storeTestIds.productCard);

    expect(productCards).toHaveLength(mockedGetProducts.length);
  });
});
