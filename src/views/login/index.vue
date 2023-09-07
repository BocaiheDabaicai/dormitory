<script setup>
import {ref, reactive,onMounted} from "vue";
import {postLogin} from "@/api/login";
import {GET_TOKEN, SET_TOKEN} from "@/utlis/token";
import {useRouter} from "vue-router";
import {Snackbar} from "@varlet/ui";

const user = reactive({
  username: '',
  password: '',
  remenber: false
})

// 全局路由对象
const router = useRouter()
// 控制消息条状态
const fallbackRef = ref(false)

// 登录
const submit = async function () {
  try {
    let response = await postLogin(user.username, user.password)
    console.log(response)
    let {data} = response

    if (data.code === 200) {
      Snackbar['success'](`✨✨登录成功~~😀`)
      user.remenber && SET_TOKEN(data.data.token)
      await router.push({path: '/'})
    }
  } catch (error) {
    Snackbar['info'](error.message)
  }
}

// 读取Token，直接登录
onMounted(()=>{
  console.log(GET_TOKEN())
})


</script>

<template>
  <div class="container">
    <div class="login">
      <var-card :elevation="4" src="src/assets/login/mountain.jpg">
        <template #title>
          <h2>登录</h2>
        </template>
        <template #description>
          <var-input class="login-input" placeholder="用户名" type="text" v-model="user.username">
            <template #append-icon>
              <var-icon class="append-icon" name="checkbox-marked-circle"/>
            </template>
          </var-input>
          <var-input class="login-input" placeholder="密码" type="password" v-model="user.password">
            <template #append-icon>
              <var-icon class="append-icon" name="weather-cloudy"/>
            </template>
          </var-input>
          <div class="login-link">
            <var-link type="primary" underline="hover">忘记密码?</var-link>
          </div>
        </template>
      </var-card>
      <div class="login-footer">
        <var-radio v-model="user.remenber">Remenber me</var-radio>
        <var-button style="font-size: 16px;width: 40vw" size="large" color="linear-gradient(to right, #18e3d2, #5d74e1)"
                    text-color="#fff" @click="submit">SIGNUP
        </var-button>
      </div>
      <var-divider description="其他登录方式"/>
      <var-space style="margin: 20px 0" justify="center" :size="[20,20]">
        <var-button type="primary" round>
          <var-icon name="github"/>
        </var-button>
        <var-button type="success" round>
          <var-icon name="cellphone"/>
        </var-button>
        <var-button type="warning" round>
          <var-icon name="email"/>
        </var-button>
        <var-button type="info" round>
          <var-icon name="shopping"/>
        </var-button>
      </var-space>
      <div class="other-link">
        新用户吗?请在这里点击
        <var-link type="primary" underline="hover">注册</var-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-image: radial-gradient(circle, #ffffff 60%, #e9fbfb);
}

.login {
  margin: 10px 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

}

.login-input {
  margin: 20px 10px;
}

.login-link {
  display: flex;
  justify-content: flex-end;
  margin: 0 10px 10px;
}

.login-footer {
  display: flex;
  margin: 30px 0 60px;
  justify-content: space-between;
  align-items: center;
}

.other-link {
  display: flex;
  justify-content: center;
  font-size: 14px;
  margin-bottom: 50px;
  letter-spacing: 1px;
}
</style>