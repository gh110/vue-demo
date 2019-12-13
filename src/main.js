import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pluginError from '@/plugins'
import '@/assets/base.css'

Vue.config.productionTip = false

Vue.use(pluginError)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
