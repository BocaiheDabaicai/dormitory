import {Snackbar} from "@varlet/ui";


export const getErrorMessage = function(data){
    if (data.code !== 200){
        Snackbar['error'](`${data.code}:${data.data.message}`)
    }
}