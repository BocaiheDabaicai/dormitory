import {defineStore} from "pinia";
import {getInfo, postLogin} from "@/api/login";
import {Snackbar} from "@varlet/ui";
import {GET_TOKEN, SET_TOKEN} from "@/utlis/token";
import router from "@/router";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        username: '',
        avatar:'',
        token: GET_TOKEN()
    }),
    actions: {
        async login(user) {
            console.log(user)
            try {
                let result = await postLogin(user.username, user.password)
                let data = result.data

                if (data.code === 200) {
                    Snackbar['success'](`✨✨登录成功~~😀`)
                    user.remenber && SET_TOKEN(data.data.token)
                    await router.push({path: '/'})
                }
            }catch (error) {
                Snackbar['info'](error.message)
            }
        },
        async userInfo(){
            try{
                let result =  await getInfo()
                let data = result.data

                if (data.code === 200){
                    this.username = data.data.checkUser.username
                    this.avatar = data.data.checkUser.avatar
                    Snackbar['success'](`✨✨登录成功~~😀`)
                }
                console.log(this.username)
                console.log(this.avatar)
            }catch (error) {
                Snackbar['info'](error.message)
            }
        }
    }
})