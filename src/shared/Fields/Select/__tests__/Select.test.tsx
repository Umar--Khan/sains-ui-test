import renderer from 'react-test-renderer';

import { quantityOptions } from 'src/const/QuantityOptions';
import Select from '../Select';

describe('<Select />', () => {
  it('Should render correctly', () => {
    const props = {
      onChange: jest.fn(),
      value: '1',
      options: quantityOptions,
      name: 'Qty',
    };

    const component = renderer.create(<Select {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
