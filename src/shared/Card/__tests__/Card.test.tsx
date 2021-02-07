import renderer from 'react-test-renderer';

import Card from '../Card';

describe('<Card />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(<Card>Hello</Card>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
