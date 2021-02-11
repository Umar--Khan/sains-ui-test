import renderer from 'react-test-renderer';
import { withRouter } from 'src/testUtils/helpers';
import AppLayout from '../';

describe('<AppLayout />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(
      withRouter(<AppLayout>App layout test</AppLayout>),
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
