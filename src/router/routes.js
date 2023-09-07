export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'Login', // 命名路由
        meta: {
            title: '登录',
            show: false
        }
    },
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'Layout', // 命名路由
        redirect:'/home',
        meta: {
            title: '主界面',
            show: false
        },
        children:[
            {
                path: '/home',
                component: () => import('@/views/home/index.vue'),
                name: 'Home', // 命名路由
                meta: {
                    title: '首页',
                    show: false
                },
            }
        ]
    }
]