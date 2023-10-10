// 获取规范日期 yyyy年mm月dd日 星期w
// 拿到当前时间
export const timer = function () {
    let date = new Date()
    let month = `${date.getMonth() + 1}`.padStart(2, '0')
    let day = `${date.getDate()}`.padStart(2, '0')

    let resultArray = ['日', '一', '二', '三', '四', '五', '六']
    let week = resultArray[date.getDay()]

    return `${date.getFullYear()}年${month}月${day}日 星期${week}`
}

// 拿到自定义时间
export const getTimer = function (year = 2023, month = 8, day = 21) {
    let date = new Date(year,month-1,day)
    let nameMonth = `${month}`.padStart(2, '0')
    let nameDay = `${day}`.padStart(2, '0')

    let resultArray = ['日', '一', '二', '三', '四', '五', '六']
    let week = resultArray[date.getDay()]

    return `${year}年${nameMonth}月${nameDay}日 星期${week}`
}

