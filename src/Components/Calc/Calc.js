import React, { Component } from 'react';
import './Calc.css'


class Calc extends Component {
    constructor() {
        super();

        this.state = {
            res: 0,
            number1: 20,
            number2: 5,
            operation: '+',
        };

        this.ShowResault = this.ShowResault.bind(this);
        this.handleNumber1Change = this.handleNumber1Change.bind(this);
        this.handleNumber2Change = this.handleNumber2Change.bind(this);
        this.handleOperationChange = this.handleOperationChange.bind(this);  
    }

    ShowResault() {
        let result = 0;
        switch (this.state.operation) {
            case '+':
            result = this.state.number1 + this.state.number2;                      
                break;
            case '-':
            console.log('-');
            result = this.state.number1 - this.state.number2;                      
                break;
            case '*':
            console.log('*');
            result = this.state.number1 * this.state.number2;
                break;
            case '/':
            result = this.state.number1 / this.state.number2;            
            break;
            default:
                break;
        }
        this.setState({res: result});                          
        
        console.log('жмяк!!');
        console.log(this.state.number1 + this.state.number2);
        
    }

    handleNumber1Change(e) {
        this.setState({number1: +e.currentTarget.value});
    }

    handleNumber2Change(e) {
        this.setState({number2: +e.currentTarget.value});
    }

    handleOperationChange(e) {
        this.setState({operation: e.currentTarget.value});
    }


    render() {
        return (
            <div className="calculator">
                <div>
                    <input value={this.state.number1} onChange={this.handleNumber1Change}/>
                </div>
                <div>
                    <select onChange={this.handleOperationChange} >
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>                        
                    </select>
                </div>
                <div>
                    <input value={this.state.number2} onChange={this.handleNumber2Change}/>
                </div>
                <button onClick={this.ShowResault}>Result</button>
                <div>
                    Result:<span>{this.state.res}</span>
                    </div>
                <p></p>
            </div>
        )
    }
}

export default Calc;