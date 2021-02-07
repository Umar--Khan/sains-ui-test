import renderer from 'react-test-renderer';

import Main from '../Main';

describe('<Main />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(<Main>Main</Main>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
