import { createRouter, createWebHistory } from 'vue-router';
import Register from '@/pages/Register.vue';
import LogIn from '@/pages/LogIn.vue';
import Home from '@/pages/Home.vue';

const routes = [
	{
		path: '/',
		component: Home,
		name: 'home',
		meta: { requiresAuth: true },
	},
	{
		path: '/register',
		component: Register,
		name: 'register',
		meta: { notForAuthorized: true },
	},
	{
		path: '/login',
		component: LogIn,
		name: 'login',
		meta: { notForAuthorized: true },
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const auth = localStorage.getItem('auth');
	// Not logged into a guarded route?
	if (to.meta.requiresAuth && !auth) next({ name: 'login' });
	// Logged in for an auth route
	else if ((to.name == 'login' || to.name == 'register') && auth)
		next({ name: 'home' });
	// Carry On...
	else next();
});

export default router;
