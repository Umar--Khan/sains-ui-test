import renderer from 'react-test-renderer';

import { withRouter } from 'src/testUtils/helpers';
import NotFound from 'src/views/NotFound/NotFound';

describe('<NotFound />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(withRouter(<NotFound />));
    expect(component.toJSON()).toMatchSnapshot();
  });
});
