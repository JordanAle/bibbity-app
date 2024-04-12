import './assets/main.css'
import vue3GoogleLogin from 'vue3-google-login'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(vue3GoogleLogin, {
    clientId: '804315369798-sr8lacf17ekt9mv02bbni0hrqb8mu9iq.apps.googleusercontent.com'
})

app.use(createPinia())
app.use(router)

app.mount('#app')
