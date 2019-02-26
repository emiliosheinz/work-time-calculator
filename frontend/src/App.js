import React, { Component } from 'react';
import Calculator from './views/calculator.jsx';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
    render(){
      return(
        <div className="App">
          <Route component={Calculator} path='/' exact />
        </div>
      );
    }
}

export default App;
