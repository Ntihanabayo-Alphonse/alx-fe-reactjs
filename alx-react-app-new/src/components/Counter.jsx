import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
            <div>
                <p>{count}</p>
                <button onClick={ () => { setCount((count) => count - 1 ) }}>decrement</button>
                <button style={{margin: '0 8px'}} onClick={ () => { setCount((count) => count = 0 ) }}>reset</button>
                <button onClick={ () => { setCount((count) => count + 1 ) }}>increment</button>
            </div>
    );
}

export default Counter;