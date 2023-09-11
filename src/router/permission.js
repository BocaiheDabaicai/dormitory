// 路由鉴权
import router from "@/router/index";
// 引入用户状态仓库
import {useUserStore} from "@/store/user";
import pinia from "@/store";

let userStore = useUserStore(pinia)

router.beforeEach(async (to, from, next) => {
    console.log(userStore.token)

    if (to.path === '/login' && !userStore.token) {
        next()
    } else {
        if (userStore.token) {
            if (to.path !== '/login') next()
            else next({path: '/home'})
        } else {
            next({path: '/login'})
        }
    }

})

router.afterEach((to, from) => {

})