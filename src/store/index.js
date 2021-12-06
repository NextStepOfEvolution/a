import { createStore } from 'vuex'
import { ref } from 'vue'

export default createStore({
  state: {
    collapsed: ref(true),
    inverted: ref(false),
    activeKey: ref(null),
    user: ref({}),
    errorsApi: {
      status: ref(400),
      message: ref(null)
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
