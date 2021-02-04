import { JSXElementConstructor, ReactNode } from 'react';
import { ROUTES_MAP } from 'const/routes';

export interface RouteMap {
  path: ROUTES_MAP;
  component: JSXElementConstructor<ReactNode>;
}
