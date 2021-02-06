import { Route, Switch, Redirect } from 'react-router-dom';

import NotFound from 'views/NotFound/NotFound';
import routeMapping from './routeMapping';
import { ROUTES_MAP } from 'const/routes';

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
