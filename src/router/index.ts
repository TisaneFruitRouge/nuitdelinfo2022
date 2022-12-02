import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../pages/Home.vue';
import Settings from '../pages/Settings.vue';
import First from '../pages/First.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/settings', component: Settings },
    { path: '/create', component: First }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;