import axios from 'axios';

export default class CalculatorService {
    _baseURL= 'http://localhost:3003'

    getHourToGoHome(hours){
        return axios.get(this._baseURL + '/hourToGoHome/' + hours.firstInHour + '/' + hours.firstOutHour + '/' + hours.secondInHour + '/' + hours.dailyWorkHours)
    }

}
