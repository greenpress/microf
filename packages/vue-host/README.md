# @microf/vue-host

## A Vue.js plugin to create a micro-frontend application.

### installation
```shell
npm i --save-dev @microf/vue-host
```

### usage
```javascript
import { createMicroFrontendHost } from '@microf/vue-host';
import { router } from './my-router-instance';

const microFrontendPlugin = await createMicroFrontendHost({
  router,
  apps: [
    { url: 'http://localhost:3334' },
    { url: 'http://localhost:3335' },
  ]
});

// don't forget:
app.use(microFrontendPlugin);
```

That's (sort of) it.
