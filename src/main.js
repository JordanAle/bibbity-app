// Style
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
import App from './App.vue'
import router from './router'
import { Tabs, Tab } from 'vue3-tabs-component'

const app = createApp(App)

app.component('TabsComponent', Tabs)
app.component('TabComponent', Tab)
app.use(router)
app.use(createPinia())
app.use(vue3GoogleLogin, {
  clientId: '804315369798-sr8lacf17ekt9mv02bbni0hrqb8mu9iq.apps.googleusercontent.com'
})
app.mount('#app')
