<script setup>
import { ref } from "vue";

const option = ref({
    title: {
        text: "Traffic Sources",
        left: "center",
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
        orient: "vertical",
        left: "left",
        data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"],
    },
    series: [
        {
            name: "Traffic Sources",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
                { value: 335, name: "Direct" },
                { value: 510, name: "Email" },
                { value: 434, name: "Ad Networks" },
                { value: 135, name: "Video Ads" },
                { value: 1548, name: "Search Engines" },
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                },
            },
        },
    ],
});
</script>

<template>
    <div class="canvas">
        <h2>我是高级页面</h2>
        <vue-chart class="chart" :autoresize="true" :option="option" theme="dark" />
    </div>
</template>

<style scoped>
.canvas {
    color: white;
    background-color: #002163;
    width: 100vw;
    height: 100vh;
}

.chart {
    height: 30vh;
}
</style>