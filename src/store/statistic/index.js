import { defineStore } from "pinia";

export const useStatisticStore = defineStore("statisticStore", {
    state: () => ({
        dataBag: [
            {
                titleArray: {
                    headName: "区域名称",
                    headItem1: "总入住人数",
                    headItem2: "实到人数",
                },
                dataArray: [
                    { name: "员工宿舍", item1: 124, item2: 99 },
                    { name: "招待所", item1: 56, item2: 40 },
                ],
            },
            {
                titleArray: {
                    headName: "区域名称",
                    headItem1: "总入住人数",
                    headItem2: "实到人数",
                },
                dataArray: [
                    { name: "员工宿舍", item1: 124, item2: 99 },
                    { name: "招待所", item1: 56, item2: 40 },
                ],
            },
            {
                titleArray: {
                    headName: "区域名称",
                    headItem1: "总入住人数",
                    headItem2: "实到人数",
                },
                dataArray: [
                    { name: "员工宿舍", item1: 124, item2: 99 },
                    { name: "招待所", item1: 56, item2: 40 },
                ],
            },
            {
                titleArray: {
                    headName: "楼层",
                    headItem1: "总人数",
                    headItem2: "应到人数",
                    headItem3: "实到人数",
                },
                dataArray: [
                    { name: "一层", item1: 33, item2: 2,item3: 1 },
                    { name: "二层", item1: 56, item2: 40,item3: 22 },
                    { name: "三层", item1: 62, item2: 42,item3: 42 },
                    { name: "四层", item1: 71, item2: 45,item3: 41 },
                    { name: "五层", item1: 80, item2: 80,item3: 3 },
                ],
            },
        ],
    }),
    actions: {},
    getters: {},
});