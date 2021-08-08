import { IMicroAppConfig, IRouteData } from './types';


function getRoutesHandler(app: IMicroAppConfig): (() => Promise<IRouteData[]> | IRouteData[]) {
  if (typeof app.routes === 'function') {
    return app.routes;
  }
  if (app.routes instanceof Array) {
    return () => app.routes as IRouteData[];
  }
  return () => fetch(`${app.url}/${app.routesJsonUrl || 'routes.json'}`)
      .then(res => res.json());
}


export function getAppsMap(apps): { [key: string]: IMicroAppConfig } {
  return apps.reduce((map, app) => {
    const key = app.name || app.url;
    const currentApp: IMicroAppConfig = { ...app };

    currentApp.routes = getRoutesHandler(app);

    map[key] = currentApp;

    return map;
  }, {});
}
