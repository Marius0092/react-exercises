import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function ClickCounter(props) {

    const [counter, setCounter] = useState(0)

    const handleCounterIncrement = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        props.onCounterChange(counter)
    }, [counter, props])

    return (
        <div>
            <CounterDisplay count={counter} />
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    )

}