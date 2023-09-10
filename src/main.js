import { createApp } from 'vue'
import App from './App.vue'

// 引入样式组件库
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style'

// 重置样式
import 'reset-css'

// 引入自定义样式
import '@/styles/index.css'

// 引入路由组件
import router from "@/router";

// 引入状态管理库
import {createPinia} from 'pinia'

// 引入路由鉴权
import '@/router/permission'

// 引入动画样式
import 'animate.css'

createApp(App)
    .use(Varlet)
    .use(router)
    .use(createPinia())
    .mount('#app')
