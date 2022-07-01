import { useState } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const decrement = () => {
        setCounter(counter - 1)
    }

    
    return(
    <div>
        <h2>useState() Hook</h2>
        <p>Counter: {counter}</p>
        <button onClick = {() => setCounter(counter+1)}>
            Increment
        </button>
        <button onClick = {() => setCounter(0)}>
            Reset
        </button>
        <br></br>
        <button onClick={decrement}>
            Decrement
        </button>
    </div>
    );
}

export default Counter;