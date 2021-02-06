import Store from 'views/Store/Store';
import Basket from 'views/Basket/Basket';

import { RouteMap } from './routeMapping.d';
import { ROUTES_MAP } from 'const/routes';

const routeMapping: RouteMap[] = [
  {
    component: Store,
    path: ROUTES_MAP.STORE,
  },
  {
    component: Basket,
    path: ROUTES_MAP.BASKET,
  },
];

export default routeMapping;
