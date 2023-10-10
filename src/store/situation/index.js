import {defineStore} from "pinia";
// 引入自定义时间函数
import {getTimer} from "@/utlis/timer";

export const useSituationStore = defineStore('situationStore', {
    state: () => ({
        messageArray: [
            {
                id:1,
                color: 'success',
                title: '入住消息',
                content: '目前有三个人的入住申请需要处理',
                date: getTimer(undefined, 5, 21)
            },
            {
                id:2,
                color: 'warning',
                title: '房间消息',
                content: '2间房间要住满啦',
                date: getTimer(undefined, 9, 21)
            },
            {
                id:3,
                color: 'danger',
                title: '警告消息',
                content: '宿舍里有21/140人',
                date: getTimer()
            },
            {
                id:4,
                color: 'primary',
                title: '人员信息',
                content: '总入住人数有120/121人',
                date: getTimer(2022)
            },
            {
                id:5,
                color: 'info',
                title: 'A302',
                content: '要维修宿舍灯管',
                date: getTimer(undefined, 11, 10)
            }
        ]
    }),
    actions: {},
    getters: {}
})