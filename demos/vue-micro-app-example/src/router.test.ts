import { router } from './router';
import { writeFile } from 'fs';

describe('router', () => {
  it('should be the router', () => {
    expect(router).toBeDefined();
  })

  it('should have routes', () => {
    expect(router.getRoutes()).toBeInstanceOf(Array);
  });

  it('create routes.json', (next) => {
    const routes = router.getRoutes().map(route => {
      return {
        name: route.name,
        path: route.path,
        meta: route.meta
      };
    });

    writeFile('public/routes.json', JSON.stringify(routes), (err) => {
      expect(err).toBeNull();
      expect(require('../public/routes.json')).toEqual(routes);
      next();
    });
  });
})
