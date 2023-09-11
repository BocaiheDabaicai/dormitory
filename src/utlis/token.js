// 本地化存储TOKEN
export const SET_TOKEN = (token) => {
    localStorage.setItem('TOKEN',token)
}

export const GET_TOKEN = () => localStorage.getItem('TOKEN')

export const REMOVE_TOKEN = () => localStorage.removeItem('TOKEN')