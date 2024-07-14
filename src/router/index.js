import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {redirectOnMount: true}
    },
    {
      path: '/always-you',
      name: 'always-you',
      component: () => import('../views/AlwaysView.vue'),
      meta: {date: '2024-04-22'}
    },
    {
      path: '/grind',
      name: 'grind',
      component: () => import('../views/GrindView.vue'),
      meta: {date: '2024-05-15'}
    },
    {
      path: '/mansplain',
      name: 'mansplain',
      component: () => import('../views/MainsplainingView.vue'),
      meta: {date: '2024-06-05'}
    },
    {
      path: '/you-have-to-love',
      name: 'you-have-to-love',
      component: () => import('../views/YouHaveToLoveView.vue'),
      meta: {date: '2024-07-01'}
    },
    {
      path: '/home-no-matter-what',
      name: 'home-no-matter-what',
      component: () => import('../views/HomeNoMatterWhatView.vue'),
      meta: {date: '2024-07-13'}
    },
    {
      path: '/every-human-heart',
      name: 'every-human-heart',
      component: () => import('../views/EveryHumanHeartView.vue'),
      meta: {date: '2024-07-14'}
    }
  ]
});

const sortedRoutes = router
  .getRoutes()
  .filter((r) => r.meta.date)
  .sort((a, b) => new Date(a.meta.date) - new Date(b.meta.date));

router.beforeEach((to, from, next) => {
  if (to.meta.redirectOnMount && sortedRoutes.length > 0) {
    const firstRoute = sortedRoutes[0];
    next({name: firstRoute.name});
  } else {
    next();
  }
});

export {router, sortedRoutes};
