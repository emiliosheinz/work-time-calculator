const door = 3003

const express = require('express')
const app = express()
var cors = require('cors')
const bodyParser = require('body-parser')
const calculator = require('./calculator.js')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/hourToGoHome/:firstInHour/:firstOutHour/:secondInHour/:dailyWorkHours', (req, res) => {
    const hourToGoHome = calculator.calculateHourToGoHome(req.params.firstInHour, req.params.firstOutHour, req.params.secondInHour, req.params.dailyWorkHours)
    res.send(hourToGoHome)
})

app.listen(door)