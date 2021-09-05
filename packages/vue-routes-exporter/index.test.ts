import { Router } from 'vue-router';
import { join } from 'path';
import { App } from 'vue';

export function createRoutes({ router, app }: { router?: Router, app?: App }, publicPath: string) {
  describe('export vue routes', () => {

    it('read the app or router', async () => {
      expect(app || router).toBeDefined();
    });

    it('read routes from router', () => {
      expect(router.getRoutes()).toBeDefined()
    })

  });

}
