import { createRouter } from '@tanstack/react-router';
import { routeTree } from './route-tree';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});

export default router;
