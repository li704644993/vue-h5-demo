import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'

// 全量引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

// 封装Axios
import { getRequest, postRequest, multipleRequest } from './axios/http'
Vue.use(Vant)

Vue.config.productionTip = false
Vue.prototype.getRequest = getRequest
Vue.prototype.postRequest = postRequest
Vue.prototype.multipleRequest = multipleRequest

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
