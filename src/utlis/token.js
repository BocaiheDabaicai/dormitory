export const SET_TOKEN = (token) => {
    localStorage.setItem('TOKEN',token)
}

export const GET_TOKEN = () => localStorage.getItem('TOKEN')