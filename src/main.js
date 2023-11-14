import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import '@displayhtml/displayhtml-libs-1/index.css'
import dhlibs1 from '@displayhtml/displayhtml-libs-1'

createApp(App).use(dhlibs1).mount('#vue-app')
