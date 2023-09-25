import {defineStore} from "pinia";
// 引入路由对象
import {useRoute} from "vue-router";

export const useHouseStore = defineStore("HouseStore", {
    state: () => ({
        breadCrumbs:""
    }),
    actions:{
        updateCrumbs(title){
            console.log(this.breadCrumbs)
            this.breadCrumbs = title
        },
        // 返回信号灯样式，已废弃
        lampStyle:() =>({
            "--badge-icon-size":'24px',
            "--badge-content-padding":'40px 12px',
            "font-size":'24px'
        })
    }
})