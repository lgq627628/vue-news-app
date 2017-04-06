import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config'
import store from './store/'
import axios from 'axios'
import Loading from './components/loading'

import filters from './filters'
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

require('./assets/css/base.css');

Vue.use(VueRouter);
Vue.use(Loading);

//配置axios

axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('showLoading')  
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {
  return Promise.reject(error);
});
/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/
//axios.defaults.baseURL='http://localhost:8082/';
Vue.prototype.$http = axios  //把axios挂到vue原型上,其他页面在使用axios的时候直接  this.$http就可以了


const router = new VueRouter({
	mode: 'history',
	scrollBehavior:() => ({
		y:0
	}),
	routes: routerConfig
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
