export const constantRoutes = [
    {
        path: '/',
        component: () => import('@/views/login/index.vue'),
        name: 'Login', // 命名路由
        meta: {
            title: '登录',
            show: false
        }
    }
]