// 引入图表资源
import ECharts from 'vue-echarts'

export default function install(app) {
    app.component('vue-chart',ECharts)
}