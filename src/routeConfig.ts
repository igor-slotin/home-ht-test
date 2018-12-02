import { keyBy } from 'lodash';

export interface IRoute {
  name: string;
  page: string;
  pattern: string;
}

export interface IRouteConfig {
  [key: string]: IRoute;
}
const _routeConfig = [
 {
    name: 'results',
    page: '/result',
    pattern: '/results'
  }
];

export const routeConfig: IRouteConfig = keyBy(_routeConfig, 'name');
