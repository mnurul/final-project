import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Dashboard from '@/components/dashboard'
import Myself from '@/components/myself/myself'
import Myactivity from '@/components/myactivity/myactivity'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'dashboard',
    component: Dashboard
  }, {
    path: '/myself',
    name: 'myself',
    component: Myself
  }, {
    path: '/myactivity',
    name: 'myactivity',
    component: Myactivity
  }]
})
