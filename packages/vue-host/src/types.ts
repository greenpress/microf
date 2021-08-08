import { Router, RouteRecordRaw } from 'vue-router';

export interface IRouteData {
  name: string;
  path: string;
}

export interface IMicroAppConfig {
  name?: string;
  url: string;
  routesJsonUrl?: string;
  routes?: IRouteData[] | (() => Promise<IRouteData[]> | IRouteData[]);
  appRoute?: RouteRecordRaw
}

export interface IMicroFrontendHostConfig {
  router: Router;
  apps: IMicroAppConfig[]
}
