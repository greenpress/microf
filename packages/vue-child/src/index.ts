import { IMicroFrontendChildConfig } from './types';
import { EventType } from './event-type';

const EmptyComponent = {
  render() {
    return null;
  }
}

export async function createMicroFrontendChild({ router, knownApps = [] }: IMicroFrontendChildConfig) {
  let token;
  let hostUrl = 'http://localhost:3333';

  function emitEvent(eventType: EventType, data: any = {}) {
    window.parent.postMessage({
      token,
      type: eventType,
      ...data
    }, hostUrl);
  }

  await new Promise(resolve => {
    function onLoadMessage(event) {
      if (event.data?.token) {
        token = event.data.token;
        hostUrl = event.data.hostUrl;
      }
      if (event.data.routes) {
        knownApps.map(app => {
          event.data.routes[app].map((route) => {
            router.addRoute({
              ...route,
              path: `/${app}/${route.path}`,
              component: EmptyComponent
            });
          });
        });
      }

      emitEvent(EventType.Connected);
      window.removeEventListener('message', onLoadMessage);
      resolve(null);
    }

    window.addEventListener('message', onLoadMessage);
  })


  window.addEventListener('message', function onRouteChange(event) {
    if (event.data?.token) {
      token = event.data.token;
      hostUrl = event.data.hostUrl;
    }
    if (event.data.type === 'RouteChange' && event.data.url) {
      const url = event.data.url;
      if (url !== location.href) {
        router.push(event.data.path || '/');
      }
    }
  });

  return {
    install() {
      router.beforeEach(function passRouteToHostApp(to, _, next) {
        if (window.parent === window || location.pathname === to.fullPath) {
          return next();
        }
        if (to.query.token === token) {
          return next();
        }
        emitEvent(EventType.RouteChange, {
          to: {
            name: to.name,
            path: to.path,
            query: to.query,
            params: to.params
          }
        });
        next();
      });
    }
  }
}
