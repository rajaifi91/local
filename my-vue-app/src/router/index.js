import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
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