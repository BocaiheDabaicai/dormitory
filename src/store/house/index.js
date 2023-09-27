import {defineStore} from "pinia";

export const useHouseStore = defineStore("HouseStore", {
    state: () => ({
        area: "",
        showFloor:true  // 显示楼层卡片的状态
    }),
    actions: {
        updateArea(title) {
            this.area = title
        },
        changeShowFloor(){
            this.showFloor = !this.showFloor
        },
        // 返回信号灯样式，已废弃
        lampStyle: () => ({
            "--badge-icon-size": '24px',
            "--badge-content-padding": '40px 12px',
            "font-size": '24px'
        })
    },
    getters:{
        getRightName(state){
            if (state.area === '') return ''
            if (state.area === 'dormitory') return '员工宿舍'
            if (state.area === 'hotel') return '招待所'
        }
    }
})