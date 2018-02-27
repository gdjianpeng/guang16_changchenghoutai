//路由配置
import Vue from 'Vue'
import VueRouter from 'vue-router'

import Login from '../component/login/Login.vue'
import Register from '../component/register/Register.vue'

export default Vue.use(VueRouter)
new VueRouter({
   router:[
       { name: 'login', path: '/login', component: Login},
       { name: 'register', path: '/register', component: Register}
   ]
})