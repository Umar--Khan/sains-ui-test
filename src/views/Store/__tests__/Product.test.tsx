import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';

import ProductCard, { ProductCardProps } from '../ProductCard';
import { mockedGetProducts } from 'src/testUtils/mocks/getProducts';

describe('<ProductCard />', () => {
  const props = {
    product: mockedGetProducts[0],
    handleOnClick: jest.fn(),
  } as ProductCardProps;

  it('Should render correctly', () => {
    const component = renderer.create(<ProductCard {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should call the onClick prop', () => {
    render(<ProductCard {...props} />);
    fireEvent.click(screen.getByText('Add to basket'));
    expect(props.handleOnClick).toHaveBeenCalledTimes(1);
    expect(props.handleOnClick).toHaveBeenCalledWith(mockedGetProducts[0]);
  });
});
