import { createRouter, createWebHistory } from 'vue-router';
import LoadingScreen from '@/components/LoadingScreen.vue';
import WelcomeScreen from '@/components/WelcomeScreen.vue';

const routes = [
  {
    path: '/',
    name: 'LoadingScreen',
    component: LoadingScreen
  },
  {
    path: '/welcome',
    name: 'WelcomeScreen',
    component: WelcomeScreen
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
