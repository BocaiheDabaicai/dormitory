import { defineStore } from "pinia";
// 引入规范化时间
import { timer } from "@/utlis/timer";

export const useHomeCardStore = defineStore("homeCardStore", {
    state: () => ({
        // 获取格式化时间
        date: timer(),
        homeCardArray: [
            // 人员对象卡片
            {
                index: 0,
                title: "宿舍人员",
                current: 78,
                max: 128,
            },
            // 宿舍对象卡片
            {
                index: 1,
                title: "宿舍房间",
                current: 90,
                max: 120,
            },
        ],
        // 卡片浮动后显示的具体内容
        personArray: [
            {
                id: "0001",
                avatar: "https://varlet.gitee.io/varlet-ui/cat.jpg",
                sex: "male",
                name: "王小明",
                dormitoryNumber: "A305",
            },
            {
                id: "0002",
                avatar: "https://varlet.gitee.io/varlet-ui/cat.jpg",
                sex: "male",
                name: "李均君",
                dormitoryNumber: "A304",
            }, {
                id: "0003",
                avatar: "https://varlet.gitee.io/varlet-ui/cat.jpg",
                sex: "female",
                name: "杨小丽",
                dormitoryNumber: "A205",
            },
        ],
        roomArray: [
            {
                id: "0001",
                dormitoryNumber: "A305",
                current: 3,
                max: 4,
            },
            {
                id: "0002",
                dormitoryNumber: "A304",
                current: 2,
                max: 3,
            }, {
                id: "0003",
                dormitoryNumber: "A201",
                current: 1,
                max: 4,
            }, {
                id: "0004",
                dormitoryNumber: "A402",
                current: 1,
                max: 4,
            },
        ],
    }),
    actions: {
        // 计算卡片主要颜色
        computeColor: (index) => index ? "#2fbdbb" : "#a6a0ff",
        // 计算进度条长度 , 总宽度为 82vw
        computeWidth: (current, max) => Math.trunc((current / max) * 82) + "vw",
        // 修改卡片展示的背景颜色、边框
        cardBackground: (index) => ({
            "--card-background": index ? "#def6f6" : "#f0efff",
            "--card-border-radius": "10px",
        }),
    },
    getters: {},
});