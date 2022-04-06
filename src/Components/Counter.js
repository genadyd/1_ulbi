import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class Counter extends Component{

    constructor() {
        super();
        this.state = {
            counter: 0
        }
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
        const counterPlus = this.counterPlus.bind(this)
        return (
            <div className="container pt-1">
                <Button className="me-2" onClick={counterPlus}>Increment</Button>
                <Button onClick={this.counterMinus}>Decrement</Button>
                <div className="res">{this.state.counter}</div>
            </div>)
    }


}
export default Counter;
