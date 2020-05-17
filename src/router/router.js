import Vue from 'vue'
import Router from 'vue-router'
import Page from '../view/page.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Page
    }
  ]
})
