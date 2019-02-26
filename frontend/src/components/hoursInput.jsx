import React, { Component } from 'react';
import MaskedInput from 'react-maskedinput'
import './hoursInput.css'

class HoursInput extends Component {
    render() {
        return (
            <div className="hour-input-combo">
                <label className="hour-input-label">{this.props.inputLabel}</label>
                <MaskedInput className="masked-hour-input" mask="11:11" name={this.props.name} value={this.props.value} onChange={this.props.onChange}/>
            </div>
        );
    }
}

export default HoursInput;