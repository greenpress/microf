import { IMicroAppConfig, IRouteData } from './types';
import MicroApp from './MicroApp.vue';
import { RouteRecordRaw, RouterView } from 'vue-router';

export function getBasicAppRoute(app: IMicroAppConfig): RouteRecordRaw {
  return {
    path: app.appRoute.path || '/',
    component: RouterView,
    children: (app.routes as IRouteData[]).map(route => {
      return {
        name: route.name,
        path: route.path,
        component: MicroApp,
        props: (currentRoute) => {
          return {
            app: app,
            route: route,
            url: app.url + currentRoute.fullPath
                .slice(currentRoute.fullPath.indexOf(currentRoute.path))
                .replace(app.appRoute.path, '')
          }
        }
      }
    })
  }
}
