import { Router } from 'vue-router';

export interface IRouteData {
  name: string;
  path: string;
}

export interface IMicroAppConfig {
  url: string;
  routesJsonUrl?: string;
  routes?: IRouteData[] | (() => Promise<IRouteData[]> | IRouteData[])
}

export interface IMicroFrontendHostConfig {
  router: Router;
  apps: IMicroAppConfig[]
}
