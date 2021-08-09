# @microf/vue-child

## A Vue.js plugin to declare your application as a micro-frontend for another application
*For the host application use the package `@microf/vue-host`*

### installation
```shell
npm i --save-dev @microf/vue-child
```

### usage
```javascript
import { createMicroFrontendChild } from '@microf/vue-child';
import { router } from './my-router-instance';

const microFrontendPlugin = await createMicroFrontendChild({
  router
});

// don't forget:
app.use(microFrontendPlugin);
```

That's (sort of) it.
