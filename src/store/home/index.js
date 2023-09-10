import {defineStore} from "pinia";

export const useHomeStore = defineStore('homeStore', {
    state:()=>({
        title:'首页'
    }),
    actions:{
        changeTile(title){
            this.title = title
        }
    }
})