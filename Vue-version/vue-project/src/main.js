// main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia' // for state management (acts like context)
import App from './App.vue'
import router from './router' // Vue Router instance
import './style.css'

// Create Vue app
const app = createApp(App)

// Use Pinia for state (instead of React Context)
const pinia = createPinia()
app.use(pinia)

// Use Vue Router
app.use(router)

// Mount app to DOM
app.mount('#app')
