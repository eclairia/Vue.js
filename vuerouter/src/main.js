// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueRouter from 'vue-router'

import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'root',
        component: require('./components/PageA.vue').default
    }, {
        path: '/b',
        name: 'pageb',
        component: require('./components/PageB.vue').default
    }, {
        path: '/articles/:id(\\d+)',
        name: 'article',
        component: require('./components/PageB.vue').default
    }, {
        path: '*',
        redirect: '/'
    }]
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
