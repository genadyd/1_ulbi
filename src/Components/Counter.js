import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class Counter extends Component{

    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.counterPlus = this.counterPlus.bind(this)
    }

    counterPlus(){
        let currentCounter = this.state.counter
        console.log()
        currentCounter++
        this.setState({
            counter: currentCounter
        })
    }
    counterMinus = () => {
        let currentCounter = this.state.counter
        currentCounter--
        this.setState({
            ...this.state,
            counter: currentCounter
        })
    }
    render() {
        return (
            <div className="container pt-1">
                <Button className="me-2" onClick={this.counterPlus}>Increment</Button>
                <Button onClick={this.counterMinus}>Decrement</Button>
                <div className="res">{this.state.counter}</div>
            </div>)
    }


}
export default Counter;
