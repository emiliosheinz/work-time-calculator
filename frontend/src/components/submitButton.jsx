import React, { Component } from 'react';
import './submitButton.css'

class SubmitButton extends Component {
    render() {
        return (
            <button type="submit" className="submit-button">{this.props.content}</button>
        );
    }
}

export default SubmitButton;