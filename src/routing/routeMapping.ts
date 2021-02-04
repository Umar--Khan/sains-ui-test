import Products from 'views/Products/Products';
import Basket from 'views/Basket/Basket';

import { RouteMap } from './routeMapping.d';
import { ROUTES_MAP } from 'const/routes';

const routeMapping: RouteMap[] = [
  {
    component: Products,
    path: ROUTES_MAP.PRODUCTS,
  },
  {
    component: Basket,
    path: ROUTES_MAP.BASKET,
  },
];

export default routeMapping;
