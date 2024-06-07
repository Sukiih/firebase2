import { getAuth, onAuthStateChanged } from '@/auth';

const authGuard = (to, from, next) => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
        if (user) {
            // Si el usuario está autenticado, permite el acceso a la ruta solicitada
            next();
        } else {
            // Si el usuario no está autenticado, redirige a la vista de inicio de sesión
            next('/login');
        }
    });
};

export default authGuard;
