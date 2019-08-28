import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: () => ({
    menubarShow: false
  }),
  mutations: {
    MENU_TOGGLE: (state) => state.menubarShow = !state.menubarShow,
    MENU_CLOSE: (state) => state.menubarShow = false
  }
})

export default store
