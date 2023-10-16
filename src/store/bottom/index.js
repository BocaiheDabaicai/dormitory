import { defineStore } from "pinia";

export const useBottomStore = defineStore("bottomStore", {
    state: () => ({
        roomCardNumber: [],
    }),
    actions: {
        getRoom() {
            this.roomCardNumber.push(this.roomCardNumber.length + 1);
        },
        closeRoom(index) {
            this.roomCardNumber = this.roomCardNumber.filter(item => item !== index);

        },
    },
    getters: {},
});