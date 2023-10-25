<script setup>
import { ref } from "vue";
// 引入路由器对象
import { useRoute, useRouter } from "vue-router";
// 引入Home、House、Bottom状态仓库
import { useHomeStore } from "@/store/home";
import { useHouseStore } from "@/store/house";
import { useBottomStore } from "@/store/bottom";
// 引入图标
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccountPlus, mdiHomeEdit, mdiVolumeHigh, mdiHomeOff } from "@mdi/js";
// 引入提示框
import { Snackbar } from "@varlet/ui";

let router = useRouter();
let route = useRoute();
let homeStore = useHomeStore();
let houseStore = useHouseStore();
let bottomStore = useBottomStore();

let activeIcon = ref(route.matched[1].name);

const jumpPage = function(name) {
    houseStore.showFloor = true;
    houseStore.updateArea("");
    homeStore.changeTile(name);
    router.push({ name: name });
};

const type = ref("primary");
const addPersonCard = function() {
    // 生成用户卡片
    bottomStore.getRoom();
    Snackbar.success(`添加人员卡片生成成功!`);
};
const notice = function(){
    // 发出通知
    Snackbar.info(`功能暂未开放~~`);
}

</script>

<template>

    <var-bottom-navigation
        class="bottom-navigation-example"
        v-model:active="activeIcon"
    >
        <var-bottom-navigation-item @click="jumpPage" name="Home" label="首页" icon="home" />
        <var-bottom-navigation-item @click="jumpPage" name="House" label="房间" icon="magnify" />
        <var-bottom-navigation-item @click="jumpPage" name="Situation" label="情况" icon="checkbox-marked-outline" />
        <var-bottom-navigation-item @click="jumpPage" name="Statistics" label="统计" icon="notebook" />

        <template #fab>
            <div class="placement-container">
                <var-menu placement="top" offset-y="-20">
                    <var-icon name="heart" />

                    <template #menu>
                        <var-cell class="cellStyle" ripple @click="addPersonCard">
                            <template #icon>
                                <svg-icon type="mdi" :path="mdiAccountPlus"></svg-icon>
                            </template>
                            添加入住人员
                        </var-cell>
                        <var-cell class="cellStyle" ripple>
                            <template #icon>
                                <svg-icon type="mdi" :path="mdiHomeEdit "></svg-icon>
                            </template>
                            修改房间信息
                        </var-cell>
                        <var-cell class="cellStyle" ripple>
                            <template #icon>
                                <svg-icon type="mdi" :path="mdiHomeOff "></svg-icon>
                            </template>
                            入住人员离宿
                        </var-cell>
                        <var-cell class="cellStyle" ripple @click="notice">
                            <template #icon>
                                <svg-icon type="mdi" :path="mdiVolumeHigh "></svg-icon>
                            </template>
                            发布通知
                        </var-cell>
                    </template>
                </var-menu>
            </div>
        </template>
    </var-bottom-navigation>
</template>

<style scoped>
.cellStyle {
    width: 150px;
    margin: 0 auto;
    text-align: center;
}
</style>