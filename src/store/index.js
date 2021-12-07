import { createStore } from 'vuex'
import { ref } from 'vue'

export default createStore({
  state: {
    collapsed: ref(true),
    inverted: ref(false),
    activeKey: ref(null),
    user: ref({}),
    language: ref({
      locale: 'RU',
      translates: [],
    })
  },
  mutations: {},
  actions: {},
  modules: {}
})
