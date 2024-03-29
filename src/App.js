import React, { Component } from 'react';
import Button from './components/Button'
import {Input} from './components/Input'
import ClearButton from './components/ClearButton';
import {evaluate} from 'mathjs';

class App extends Component {

constructor(props) {
    super(props);

    this.state = {
        input: ""
    }
}

addToInput = (val) => {
    this.setState({input : this.state.input + val});
    console.log(this.state.input)
}

calcResult = () => {

    try {
        this.setState({input: evaluate(this.state.input)})
    } catch(e) {
        this.setState({input: 'Invalid Expression'})
    }
}

    render() {
        return (
            <div className="app">
                <div className="calc-wrapper">
                    <Input input={this.state.input}></Input>
                    <div className="row">
                        <Button handleClick={this.addToInput}>7</Button>
                        <Button handleClick={this.addToInput}>8</Button>
                        <Button handleClick={this.addToInput}>9</Button>
                        <Button handleClick={this.addToInput}>/</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>4</Button>
                        <Button handleClick={this.addToInput}>5</Button>
                        <Button handleClick={this.addToInput}>6</Button>
                        <Button handleClick={this.addToInput}>*</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>1</Button>
                        <Button handleClick={this.addToInput}>2</Button>
                        <Button handleClick={this.addToInput}>3</Button>
                        <Button handleClick={this.addToInput}>+</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>.</Button>
                        <Button handleClick={this.addToInput}>0</Button>
                        <Button handleClick={this.calcResult}>=</Button>
                        <Button handleClick={this.addToInput}>-</Button>
                    </div>
                    <div className="row">
                        <ClearButton handleClear={() => {this.setState({input: ""})}}>Clear</ClearButton>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;