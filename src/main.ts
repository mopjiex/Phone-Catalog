import { createApp } from 'vue'
import '@/assets/css/style.css'
import App from '@/App.vue'
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).mount('#app');