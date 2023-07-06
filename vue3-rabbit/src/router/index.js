import { createRouter, createWebHistory } from 'vue-router'
//createRouter:创建router实例对象
//createWebHistory：创建history模式的路由
import login from '@/views/login/index.vue'
import layout from '@/views/layout/index.vue'
import Home from '@/views/Home/index.vue'
import category from '@/views/categary/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/detail/index.vue'
import cartList from '@/views/cartList/index.vue'
import CheckOut from '@/views/checkOut/index.vue'
import pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/member/index.vue'
import UserInfo from '@/views/member/components/UserInfo.vue'
import UserOrder from '@/views/member/components/UserOrder.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          name: 'category',
          component: category
        },
        {
          path: 'category/sub/:id',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'cartList',
          component: cartList
        },
        {
          path: 'checkout',
          component: CheckOut
        },
        {
          path: 'pay',
          component: pay
        }, {
          path: 'paycallback',
          component: PayBack
        }, {
          path: 'member',
          component: Member,
          children: [
            {
              path: '',
              component: UserInfo
            }, {
              path: 'order',
              component: UserOrder
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: login
    }

  ],
  // 路由滚动定制,切换时滚动到顶部
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
