import { IMicroAppConfig, IMicroFrontendHostConfig } from './types';
import { getAppsMap } from './apps-mapper';
import { getBasicAppRoute } from './basic-route-meta';
import { RouteRecordRaw } from 'vue-router';
import { changeRoute } from './child-route-change';
import { getMicroFrontendState } from './state';


export async function createMicroFrontendHost({ router, apps }: IMicroFrontendHostConfig) {
  const state = getMicroFrontendState();
  state.apps = getAppsMap(apps);

  await Promise.all(Object.keys(state.apps).map(async key => {
    const app: IMicroAppConfig = state.apps[key];
    state.appsByTokens[app.token] = app;
    app.routes = await (app.routes as Function)();
    app.appRoute = getBasicAppRoute(app);
    state.routesByApps[key] = app.routes;
    router.addRoute(app.appRoute as RouteRecordRaw);
  }));

  return {
    install() {
      window.addEventListener('message', ({ data = {} }) => {
        if (!(data.token && data.type)) {
          return;
        }
        const app: IMicroAppConfig = state.appsByTokens[data.token];
        if (!app) {
          return;
        }
        if (data.type === 'RouteChange') {
          changeRoute(router, app, data.to);
        } else if (data.type === 'Connected') {
          app.connected = true;
        }
      });
    }
  }
}
