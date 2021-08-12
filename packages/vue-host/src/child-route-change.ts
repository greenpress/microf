import { IMicroAppConfig } from './types';
import { Router } from 'vue-router';

export function changeRoute(router: Router, app: IMicroAppConfig, to: string | { name?, path?, query, params }) {
  if (typeof to === 'object' && !to.name && to.path) {
    to.path = app.appRoute.path + to.path;
    delete to.name;
  }
  return router.push(to);
}
