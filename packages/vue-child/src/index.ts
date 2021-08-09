import { IMicroFrontendChildConfig } from './types';

export function createMicroFrontendChild({ router }: IMicroFrontendChildConfig) {
  let token;
  let hostUrl = 'http://localhost:3333';
  window.addEventListener('message', event => {
    if (event.data?.token) {
      token = event.data.token;
      hostUrl = event.data.hostUrl;
    }
  });

  return {
    install() {
      router.beforeEach(function passRouteToHostApp(to, _, next) {
        if(window.parent === window) {
          return next();
        }
        if(location.pathname === to.fullPath) {
          next();
          return;
        }
        window.parent.postMessage({
          token,
          type: 'routeChange',
          to: {
            name: to.name,
            path: to.path,
            query: to.query,
            params: to.params
          }
        }, hostUrl);
        next(false);
      });
    }
  }
}
