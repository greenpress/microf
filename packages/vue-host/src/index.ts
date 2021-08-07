import { Router } from 'vue-router';

export interface IRouteData {
  name: string;
  path: string;
}

export interface IMicroAppConfig {
  url: string;
  routesJsonUrl: string;
  routes: IRouteData[] | (() => Promise<IRouteData[]> | IRouteData[])
}

export interface IMicroFrontendHostConfig {
  router: Router;
  apps: IMicroAppConfig[]
}

export function createMicroFrontendHost({router}: IMicroFrontendHostConfig): any {
  return {
    install() {
      console.log(router);
    }
  }
}
