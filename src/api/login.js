import {request} from "@/axios";

export const postLogin = async (username,password) => await request.post('/user/login',{username,password})
export const getInfo = async () => await request.get('/user/info')