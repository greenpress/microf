import { IMicroAppConfig, IRouteData } from './types';

export async function getAppsRoutes(apps: IMicroAppConfig[]): Promise<IRouteData[]> {
  const appsRoutes = await Promise.all(apps.map(app => {
    if (app.routes instanceof Array) {
      return app.routes;
    }
    if (typeof app.routes === 'function') {
      return app.routes();
    }
    return fetch(`${app.url}/${app.routesJsonUrl || 'routes.json'}`).then(res => res.json());
  }));

  return appsRoutes.flat();
}
