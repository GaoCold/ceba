import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css'
import axios from "axios";
Vue.prototype.$http = axios;
import "./styles/index.scss";

import Header from "./components/Header.vue"
Vue.component("Header", Header);
import cebian from "./components/cebian.vue"
Vue.component("cebian", cebian);

import top from "./components/top.vue"
Vue.component("top", top);
// import login from "./views/login.vue"
// Vue.component("login", login);

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
