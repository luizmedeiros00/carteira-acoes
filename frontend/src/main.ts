import router from './router'
import { createApp } from 'vue'
import VueFeather from 'vue-feather';
import filters from './utils/filters'
import App from './App.vue'
import './assets/css/tailwind.css'
import '../src/assets/css/fonts.css'
import 'animate.css';


const app = createApp(App)
app.config.globalProperties.$filters = filters
app.component(VueFeather.name, VueFeather)
app.use(router)
app.mount('#app')

