import { IMicroFrontendHostConfig } from './types';
import { getAppsRoutes } from './apps-routes';

export function createMicroFrontendHost({ router, apps }: IMicroFrontendHostConfig): any {
  let routes;

  getAppsRoutes(apps).then(appRoutes => routes = appRoutes);

  return {
    install(app) {
      console.log(router);
    }
  }
}
