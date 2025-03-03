import { createApp } from 'vue'
import './style.css'

import PrimeVue from 'primevue/config';

import Aura from '@primeuix/themes/aura';

const app = createApp(App);
app.use(PrimeVue, { 
    Theme :{
        preset : Aura
    } 
});

import App from './App.vue'
createApp(App).mount('#app')
