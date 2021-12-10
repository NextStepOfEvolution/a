import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import components from './components/index'
import naive from 'naive-ui'
import axios from 'axios'

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

app
  .use(naive)
  .use(store)
  .use(router)
  .mount('#app')

axios.interceptors.response.use(
  function (request) {
    store.state.tableData = []
    store.state.pageSize = {}
    return request
  },

  function (response) {
    if (response.response.status === 401) {
      localStorage.removeItem('user')
      store.state.user = {}
      router.push({ name: 'SignIn' })
    }
    return Promise.reject(response)
  })
