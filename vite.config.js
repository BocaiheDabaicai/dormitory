import vue from '@vitejs/plugin-vue'
import path from "path";


// 设置组件按需引入
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import {VarletUIResolver} from 'unplugin-vue-components/resolvers'

// 接入mock请求
import {viteMockServe} from "vite-plugin-mock";

// https://vitejs.dev/config/
export default ({command}) => {
    return {
        plugins: [
            vue(),
            components({
                resolvers: [VarletUIResolver()]
            }),
            autoImport({
                resolvers: [VarletUIResolver({autoImport: true})]
            }),
            viteMockServe({
                localEnabled: command === 'serve',
            }),
        ],
        resolve: {
            alias: {
                "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
            }
        }
    }
}
