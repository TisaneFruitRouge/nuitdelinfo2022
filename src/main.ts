import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import router from './router';

const pinia = createPinia()

import profiles from './assets/profiles.json';
localStorage.setItem('profiles', JSON.stringify(profiles));

createApp(App).use(pinia).use(router).mount('#app')
