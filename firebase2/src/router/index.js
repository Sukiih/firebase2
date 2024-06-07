import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { auth } from '@/auth';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      auth: true,
    }
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistroView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && auth.currentUser) {
    next("/home"); // Redirige a la página de inicio si ya hay un usuario autenticado
  } else if (to.matched.some((record) => record.meta.auth) && !auth.currentUser) {
    next("/login"); // Redirige a la página de inicio de sesión si el usuario intenta acceder a una ruta protegida sin estar autenticado
  } else {
    next(); // Permite que la navegación continúe normalmente
  }
});

export default router;

