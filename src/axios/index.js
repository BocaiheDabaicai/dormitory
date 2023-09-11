import axios from "axios";
import {getErrorMessage} from "@/axios/helper";

export const request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000,
})

// 添加请求拦截器
request.interceptors.request.use(async (config) => {
    console.log('触发请求拦截器')
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


