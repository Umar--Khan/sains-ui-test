import { Route, Switch, Redirect } from 'react-router-dom';

import NotFound from 'src/views/NotFound/NotFound';
import { ROUTES_MAP } from 'src/const/routes';
import routeMapping from './routeMapping';

const Routes = () => (
  <Switch>
    <Route path={ROUTES_MAP.NOT_FOUND} component={NotFound} exact />
    {routeMapping.map(({ path, component }) => (
      <Route key={`route-${path}`} component={component} path={path} exact />
    ))}
    <Redirect from={ROUTES_MAP.HOME} to={ROUTES_MAP.STORE} exact />
    <Redirect to={ROUTES_MAP.NOT_FOUND} />
  </Switch>
);

export default Routes;
