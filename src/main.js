import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './_helpers/router'
import { store } from './_store/store'
export const bus = new Vue();

Vue.config.productionTip = false

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
