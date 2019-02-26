const moment = require('moment')

function calculateHourToGoHome(firstInHour, firstOutHour, secondInHour, dailyWorkHours){
    firstInHour = moment.duration(firstInHour, 'HH:mm')
    firstOutHour = moment.duration(firstOutHour, 'HH:mm')
    diff = firstOutHour.subtract(firstInHour)
    hoursToWork = moment.duration(dailyWorkHours, 'HH:mm').subtract(diff)
    res = moment(secondInHour, 'HH:mm').add(moment.duration(hoursToWork, 'HH:mm')).format('HH:mm')
    return res
}

module.exports = {calculateHourToGoHome}