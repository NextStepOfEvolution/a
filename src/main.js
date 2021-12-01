import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import components from './components/index'
import naive from 'naive-ui'

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

app
  .use(naive)
  .use(store)
  .use(router)
  .mount('#app')
