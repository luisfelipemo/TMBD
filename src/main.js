import { createApp } from 'vue'
import App from './App.vue'

import 'jquery';
import 'popper.js';

import "bootstrap/dist/css/bootstrap.min.css";
import './assets/style.css';

import 'vue-scroll-up/dist/style.css'

import VueAxios from 'vue-axios'

import axios from 'axios'

createApp(App).use(VueAxios, axios).mount('#app')
