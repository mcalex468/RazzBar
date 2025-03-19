// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Catalog from '../views/CatalogView.vue';
import CatalogDetail from '../views/CatalogDetailView.vue';
import Contact from '../views/ContactView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/catalog', component: Catalog },
  { path: '/catalog/:id', component: CatalogDetail, props: true },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
