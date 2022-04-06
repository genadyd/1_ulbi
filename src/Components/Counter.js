import React, {useState} from 'react';
import {Button} from "react-bootstrap";

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const counterPlus = () => {
        let currentCounter = counter
        currentCounter++
        setCounter(currentCounter)
    }
    const counterMinus = () => {
        let currentCounter = counter
        currentCounter--
        setCounter(currentCounter)
    }

    return (
        <div className="container pt-1">
            <Button className="me-2" onClick={counterPlus}>Increment</Button>
            <Button onClick={counterMinus}>Decrement</Button>
            <div className="res">{counter}</div>
        </div>)
}

export default Counter;
