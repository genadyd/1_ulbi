import {useState} from "react";

export default function Counter() {
    const[counter, setCounter] = useState(0)
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
        <>
            <button onClick={counterPlus}>Increment</button>
            <button onClick={counterMinus}>Decrement</button>
            <div className="res">{counter}</div>
        </>)
}
