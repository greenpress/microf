import { IMicroFrontendHostConfig } from './types';
import { getAppsMap } from './apps-mapper';
import { getBasicAppRoute } from './basic-route-meta';

export async function createMicroFrontendHost({ router, apps }: IMicroFrontendHostConfig) {
  const state = { apps: getAppsMap(apps) }

  await Promise.all(Object.keys(state.apps).map(async key => {
    const app = state.apps[key];
    app.routes = await (app.routes as Function)();
    app.appRoute = getBasicAppRoute(app);
    router.addRoute(app.appRoute);

  }));

  return {
    install() {
    }
  }
}
