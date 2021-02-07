import Store from 'src/views/Store/Store';
import Basket from 'src/views/Basket/Basket';

import { RouteMap } from './routeMapping.d';
import { ROUTES_MAP } from 'src/const/routes';

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
