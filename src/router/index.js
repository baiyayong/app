import Vue from 'vue'
import Router from 'vue-router'
import goods from '../pages/goods/goods.vue'
import ratings from '../pages/ratings/ratings.vue'
import seller from '../pages/seller/seller.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:goods
    },
    {
      path: '/goods',
      component:goods
    },
    {
      path: '/ratings',
      component:ratings
    },
    {
      path: '/seller',
      component:seller
    }
  ]
})
