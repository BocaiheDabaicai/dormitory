import {defineStore} from "pinia";

export const useHomeStore = defineStore('homeStore', {
    state:()=>({
        title:'首页',
        mapObject:[
            {name:"Home",label:"首页"},
            {name:"House",label:"房间"},
            {name:"Situation",label:"情况"},
            {name:"Statistics",label:"统计"}
        ]
    }),
    actions:{
        // 切换顶部标签
        changeTile(title){
            let result = this.mapObject.find(item => item.name === title)
            this.title = result.label
        }
    }
})