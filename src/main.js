import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Navigation from '@/components/Navigation.vue'

import './assets/main.css'

const app = createApp(App)

app.component('navigation', Navigation)

app.use(router)

app.mount('#app')