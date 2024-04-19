import './assets/main.css'
// import 'vuetify/dist/vuetify.min.css'

import vue3GoogleLogin from 'vue3-google-login'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createVuetify } from 'vuetify'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const vuetify = createVuetify()

app.use(vuetify)

app.use(vue3GoogleLogin, {
  clientId: '804315369798-sr8lacf17ekt9mv02bbni0hrqb8mu9iq.apps.googleusercontent.com'
})

app.use(createPinia())
app.use(router)

app.mount('#app')
