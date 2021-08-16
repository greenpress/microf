import { Router } from 'vue-router';

export interface IMicroFrontendChildConfig {
  router: Router & any;
  knownApps?: string[]
}
