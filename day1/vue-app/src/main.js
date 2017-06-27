import Vue from 'vue';
import VueRouter from "vue-router";

import App from './App.vue';
import router from './router';
//通过全局方法 Vue.use() 使用插件

import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(VueRouter);

//引入css文件
import './scss/main.scss'
new Vue({
	router: router,
	render: h => h(App)
}).$mount("#app");