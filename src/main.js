import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { i18n } from './i18n.js'
import { reveal } from './directives/reveal.js'

createApp(App).use(i18n).directive('reveal', reveal).mount('#app')
