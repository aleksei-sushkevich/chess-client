import { createRouter, createWebHistory } from 'vue-router';

import store from './store/index.js';
import NotFound from './pages/NotFound';
import UserAuth from './pages/UserAuth';
import TheGame from './pages/TheGame';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/auth' },
        { path: '/game', component: TheGame, meta: { requiresAuth: true} },
        { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

router.beforeEach(function(to, _, next) {
    if (to.meta.requiresAuth && !store.getters["auth/isAuthenticated"]) {
        next('/auth');
    } else if (to.meta.requiresUnauth && store.getters["auth/isAuthenticated"]) {
        next('/game');
    } else {
        next();
    }
});

export default router;
