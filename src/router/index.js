import Vue from 'vue'
import Router from 'vue-router'
import add from '@/components/Add'
import update from '@/components/update'
import del from '@/components/Delete'
import query from '@/components/Query'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/add',
      name: 'new',
      component: add
    },
    {
      path: '/update',
      name: 'update',
      component: update
    },
    {
      path: '/delete',
      name: 'delete',
      component: del
    },
    {
      path: '/query',
      name: 'query',
      component: query
    },
  ]
})
