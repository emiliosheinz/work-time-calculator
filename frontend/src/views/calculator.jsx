import React, { Component } from 'react';
import HoursInput from '../components/hoursInput.jsx';
import SubmitButton from '../components/submitButton.jsx';
import ToastrService from '../services/ToastrService.js'
import './calculator.css';
import CalculatorService from '../services/CalculatorService.js';

class Calculator extends Component {
    constructor(){
        super()
        this.state = {
            firstInHour: '',
            firstOutHour: '',
            secondInHour: '',
            dailyWorkHours: '',
            calculated: false,
            hourToGoHome: '',
        }
        this.calculatorService = new CalculatorService()
        this.toastrService = new ToastrService()
    }
    
    onChange = (event) => {
        const target = event.target
        const name = target.name

        this.setState({
            [name]: target.value
        })
    }

    onCalcularSubmit = (event) => {
        event.preventDefault()
        const hours = {
            firstInHour: this.state.firstInHour,
            firstOutHour: this.state.firstOutHour,
            secondInHour: this.state.secondInHour,
            dailyWorkHours: this.state.dailyWorkHours
    }
        this.calculatorService.getHourToGoHome(hours)
            .then(resp => {
                this.setState({
                    calculated:true,
                    hourToGoHome: resp.data
                })
                this.toastrService.success("Você poderá ir para casa as " + this.state.hourToGoHome)
            })
    }  
    
    render() {
        return (
            <div className="calculator-view">
                <form className="hours-form" onSubmit={this.onCalcularSubmit} >
                    <HoursInput inputLabel="Primeiro ponto:" name="firstInHour" onChange={this.onChange} value={this.state.firstInHour}/>
                    <HoursInput inputLabel="Segundo ponto:" name="firstOutHour" onChange={this.onChange} value={this.state.firstOutHour}/>
                    <HoursInput inputLabel="Terceiro Ponto:" name="secondInHour" onChange={this.onChange} value={this.state.secondtInHour}/>
                    <HoursInput inputLabel="Horas diárias de trabalho:" name="dailyWorkHours" onChange={this.onChange} value={this.state.dailyWorkHours}/>
                    <div className="form-footer">
                        <SubmitButton content="CALCULAR"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Calculator;