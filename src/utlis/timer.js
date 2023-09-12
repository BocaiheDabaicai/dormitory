// 获取规范日期 yyyy年mm月dd日 星期w
export const timer = function () {
    let date = new Date()
    let month = `${date.getMonth() + 1}`.padStart(2, '0')
    let day = `${date.getDate()}`.padStart(2, '0')

    let resultArray = ['日', '一', '二', '三', '四', '五', '六']
    let week = resultArray[date.getDay()]

    return `${date.getFullYear()}年${month}月${day}日 星期${week}`
}
