// 路由鉴权
import router from "@/router/index";
// 引入用户状态仓库
import {useUserStore} from "@/store/user";
import pinia from "@/store";
// 引入加载框
import {LoadingBar} from "@varlet/ui";

let userStore = useUserStore(pinia)

LoadingBar.setDefaultOptions({
    top: 'var(--app-bar-height)',
    color: '#00c28e',
})

router.beforeEach(async (to, from, next) => {
    console.log(userStore.token)

    LoadingBar.start()

    if (to.path === '/login' && !userStore.token) {
        next()
    } else {
        if (userStore.token) {
            if (to.path !== '/login') {
                if (!router.hasRoute(to.name)) next({path: '/404'})
                else next()
            } else next({path: '/home'})
        } else {
            next({path: '/login'})
        }
    }

})

router.afterEach((to, from) => {
    setTimeout(() => {
        LoadingBar.finish()
    }, 300)
})