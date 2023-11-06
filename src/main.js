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
import pinia from "@/store";

// 引入路由鉴权
import '@/router/permission'

// 引入动画样式
import 'animate.css'

// 引入图表库
import "echarts"

// 引入图表组件
import vueChart from './components'

createApp(App)
    .use(Varlet)
    .use(router)
    .use(pinia)
    .use(vueChart)
    .mount('#app')
