import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import ReviewCard, { ReviewCardProps } from '../ReviewCard';
import { mockedLocalStorageBasketProducts } from 'src/testUtils/mocks/localStorageBasketProducts';

describe('<ReviewCard />', () => {
  const props = {
    basketProduct: mockedLocalStorageBasketProducts[0],
    handleOnClick: jest.fn(),
  } as ReviewCardProps;

  it('Should render correctly', () => {
    const component = renderer.create(<ReviewCard {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should call the onClick prop', () => {
    render(<ReviewCard {...props} />);
    fireEvent.click(screen.getByText('Remove from basket'));
    expect(props.handleOnClick).toHaveBeenCalledTimes(1);
    expect(props.handleOnClick).toHaveBeenCalledWith(
      mockedLocalStorageBasketProducts[0],
    );
  });
});
