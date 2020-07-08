import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return (
        <div>
            <h2>This is first Child using CounterContext</h2>
            <h4>Counter Value is: {counterValue[0]}</h4>

            <button onCLick={()=> {counterValue[1](++counterValue[0])}}>
                Increment Context
            </button>
        </div>
    )
}

export default Child;