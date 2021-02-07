import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';

import Button, { ButtonProps } from '../Button';

describe('<Button />', () => {
  it('Should render correctly', () => {
    const props = {
      name: 'button-name',
      className: 'button-class-name',
      ariaLabel: 'button-aria-label',
      id: 'button-id',
    } as ButtonProps;

    const component = renderer.create(<Button {...props}>Button</Button>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should call the onClick prop', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Button</Button>);
    fireEvent.click(screen.getByText('Button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
