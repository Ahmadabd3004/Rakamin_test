import React, { useState } from "react";

function CounterExample() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Push here to add</button>
        </>
    );
}

export default CounterExample;
