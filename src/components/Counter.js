import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="section">
        <h2>Count is: {count}</h2>
            <button className="count-button" onClick={() => setCount(count - 1)}>-</button>
            <button className="count-button" onClick={() => setCount(count + 1)}>+</button>
        </ div>
    )
}

export default Counter;
