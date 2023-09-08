import axios from "axios";
import {getErrorMessage} from "@/axios/helper";
import {useUserStore} from "@/store/user";

export const request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000,
})

// 添加请求拦截器
request.interceptors.request.use((config) => {
    console.log('触发请求拦截器')
    // 请求发起之前，获取token
    if(useUserStore().token) config.headers.token = useUserStore().token

    return config;
}, (error) => {
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use((response) => {
    console.log('触发响应拦截器')
    getErrorMessage(response.data)

    return response;
}, (error) => {
    return Promise.reject(error);
});


