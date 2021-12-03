import { createStore } from 'vuex'
import { ref } from 'vue'

export default createStore({
  state: {
    collapsed: ref(true),
    inverted: ref(false),
    activeKey: ref(null),
    user: ref({})
  },
  mutations: {},
  actions: {},
  modules: {}
})
