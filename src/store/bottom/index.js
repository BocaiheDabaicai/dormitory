import { defineStore } from "pinia";

export const useBottomStore = defineStore("bottomStore", {
    state: () => ({
        roomCardNumber: [],
    }),
    actions: {
        getRoom() {
            // 添加卡片，为数组加一个数字
            this.roomCardNumber.push(this.roomCardNumber.length + 1);
        },
        closeRoom(index) {
            // 删除卡片，对应数据会被过滤掉
            this.roomCardNumber = this.roomCardNumber.filter(item => item !== index);

        },
    },
    getters: {},
});