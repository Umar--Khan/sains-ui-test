import renderer from 'react-test-renderer';

import UserBasket from '../UserBasket';

describe('<UserBasket />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(
      <UserBasket itemsInBasket={2} totalPriceBasket={178} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
