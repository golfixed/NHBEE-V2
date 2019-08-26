import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import messages from './locales'
import store from './store'
import VueCarousel from '@chenfengyuan/vue-carousel';

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(VueCarousel);

const i18n = new VueI18n({
  locale: 'th', // set locale
  messages // set locale messages
})

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  render: h => h(App),
  store
}).$mount('#app')
