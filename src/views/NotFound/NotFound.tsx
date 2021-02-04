import { Link } from 'react-router-dom';

import { ROUTES_MAP } from 'const/routes';

const NotFound = () => (
  <div>
    Looks like you're lost. Go to{' '}
    <Link to={ROUTES_MAP.PRODUCTS}>homepage.</Link>
  </div>
);

export default NotFound;
