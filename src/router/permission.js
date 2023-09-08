// 路由鉴权
import router from "@/router/index";
// 获取用户仓库
import {useUserStore} from "@/store/user";
// 引入弹窗动画
import {Snackbar} from "@varlet/ui";

router.beforeEach(async (to, from, next) => {
    // 路由鉴权
    let userStore = useUserStore()
    try {
        // await userStore.userInfo()
        // Snackbar['success'](`✨✨登录成功~~😀`)
        next()
    }catch (error) {
        console.log(error.message)
    }
})

router.afterEach((to, from) => {

})