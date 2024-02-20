import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import axios from 'axios'
import VueAxios from 'vue-axios'
import Toaster from '@meforma/vue-toaster'

import './assets/custom.scss'

const app = createApp(App)
.use(router)
.use(store)
.use(Toaster)
app.use(VueAxios, axios)
.mount('#app')