import renderer from 'react-test-renderer';

import Select from '../Select';

const quantityOptions = Array.from(Array(5).keys()).map(quantity => (
  <option value={quantity} key={quantity}>
    {quantity}
  </option>
));

describe('<Select />', () => {
  it('Should render correctly', () => {
    const props = {
      onChange: jest.fn(),
      value: 1,
      options: quantityOptions,
      name: 'Qty',
    };

    const component = renderer.create(<Select {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
