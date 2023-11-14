import './assets/main.css' // J'importe mon fichier css

import { createApp } from 'vue' // J'importe mes dépendances
import { createPinia } from 'pinia' // J'importe mes dépendances

import App from './App.vue' // J'importe mon composant App.vue
import router from './router' // J'importe mon router

const app = createApp(App) // Je crée mon application avec mon composant App.vue

app.use(createPinia())
app.use(router)

app.mount('#app') // Je monte mon application dans le DOM avec l'id app
