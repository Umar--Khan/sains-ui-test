import renderer from 'react-test-renderer';
import { withRouter } from 'src/testUtils/helpers';
import Footer from '../Footer';

describe('<Footer />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(withRouter(<Footer />));
    expect(component.toJSON()).toMatchSnapshot();
  });
});
