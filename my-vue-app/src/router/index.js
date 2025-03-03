import { createRouter, createWebHistory } from 'vue-router';
import AppMainLayout from '@/layouts/AppMainLayout.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes = [
  {
    path: '/',
    component: AppMainLayout,
    children: [
      { path: '', component: Home },
      { path: 'about', component: About },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;