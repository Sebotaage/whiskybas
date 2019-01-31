import './firebase'
import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire';
import VueRouter from 'vue-router';
import SideBar from './Sidebar.vue'
import Routes from './routes.js';

Vue.use(VueFire);
Vue.use(VueRouter);

Vue.component('side-bar', SideBar);


const router = new VueRouter({
	routes: Routes
});
 
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
