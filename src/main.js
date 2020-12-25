import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import toast from './components/common/toast/index'
import Fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast)

Vue.use(VueLazyLoad)

Fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
