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
            },
            {
                path: '/house',
                component: () => import('@/views/house/index.vue'),
                name: 'House', // 命名路由
                redirect:'Area',
                meta: {
                    title: '选择',
                    show: false
                },
                children:[
                    {
                        path: '/area',
                        component: () => import('@/views/house/area/index.vue'),
                        name: 'Area', // 命名路由
                        meta: {
                            title: '区域',
                            show: false
                        },
                    },
                    {
                        path: '/floor',
                        component: () => import('@/views/house/floor/index.vue'),
                        name: 'Floor', // 命名路由
                        meta: {
                            title: '楼层',
                            show: false
                        },
                        children:[
                            {
                                path: '/room',
                                component: () => import('@/views/house/floor/room/index.vue'),
                                name: 'Room', // 命名路由
                                meta: {
                                    title: '房间',
                                    show: false
                                },
                            },
                            {
                                path: '/person',
                                component: () => import('@/views/house/floor/person/index.vue'),
                                name: 'Person', // 命名路由
                                meta: {
                                    title: '详情',
                                    show: false
                                },
                            },
                        ]
                    },

                ],
            },
            {
                path: '/situation',
                component: () => import('@/views/situation/index.vue'),
                name: 'Situation', // 命名路由
                meta: {
                    title: '情况',
                    show: false
                },
            },
            {
                path: '/statistics',
                component: () => import('@/views/statistics/index.vue'),
                name: 'Statistics', // 命名路由
                meta: {
                    title: '统计',
                    show: false
                },
            }
        ]
    },
    {
        path:'/404',
        component:()=> import('@/views/404/index.vue'),
        name:'404'
    },
    {
        path:'/advance',
        component:()=> import('@/views/advance/index.vue'),
        name:'advance'
    }
]