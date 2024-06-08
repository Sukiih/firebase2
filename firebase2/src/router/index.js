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
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistroView.vue'),
    meta: {
      public: true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
    meta: {
      public: true,
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  // Si la ruta requiere autenticación y el usuario no está autenticado, redirige al usuario a la página de inicio de sesión
  if (to.meta.auth && !auth.currentUser) {
    next('/login');
  } 
  // Si el usuario está intentando acceder a la página de inicio de sesión o registro y ya está autenticado,
  // redirige al usuario a la página de inicio
  else if ((to.path === '/login' || to.path === '/registro') && auth.currentUser) {
    next('/home');
  } 
  // En cualquier otro caso, permite que el usuario acceda a la ruta solicitada
  else {
    next();
  }
});

export default router;

