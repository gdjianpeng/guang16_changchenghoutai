//路由配置
import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../component/login/Login.vue'
import Admin from '../component/admin/Admin.vue'
import Shopcart from '../component/admin/shopcart/Shopcart.vue'

 Vue.use(VueRouter)

// 购物车页面路由的配置
const shopcart=[
    { name: 'shopcart', path: 'shopcart', component: Shopcart }
]

// 导出路由实例
export default new VueRouter({
    routes: [
        // 登录
       { name: 'login', path: '/login', component: Login},

    //    后台管理
        { name: 'admin', path: '/admin', component: Admin, children: [...shopcart] }
   ]
})