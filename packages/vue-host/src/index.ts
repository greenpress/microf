import { IMicroAppConfig, IMicroFrontendHostConfig } from './types';
import { getAppsMap } from './apps-mapper';
import { getBasicAppRoute } from './basic-route-meta';
import { RouteRecordRaw } from 'vue-router';

export async function createMicroFrontendHost({ router, apps }: IMicroFrontendHostConfig) {
  const state = { apps: getAppsMap(apps), appsByTokens: {} };

  await Promise.all(Object.keys(state.apps).map(async key => {
    const app: IMicroAppConfig = state.apps[key];
    state.appsByTokens[app.token] = app;
    app.routes = await (app.routes as Function)();
    app.appRoute = getBasicAppRoute(app);
    router.addRoute(app.appRoute as RouteRecordRaw);
  }));

  return {
    install() {
      window.addEventListener('message', ({ data = {} }) => {
        if (data.type !== 'routeChange') {
          return;
        }
        const app: IMicroAppConfig = state.appsByTokens[data.token];
        if(!data.to.name && data.to.path) {
          data.to.path = app.appRoute.path + data.to.path;
          delete data.to.name;
        }
        console.log('changed', data.to);
        router.push(data.to);
      });
    }
  }
}
