import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Settings from '../pages/Settings.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/settings', component: Settings }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;