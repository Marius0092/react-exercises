import React, { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function ClickCounter() {
    
    const [counter, setCounter] = useState(0)

    const handleCounterIncrement = () => {
        setCounter(counter + 1)
    }

    
        return (
            <div>
                <CounterDisplay count = {counter} />
                <button onClick={handleCounterIncrement}>Increment</button>
            </div>
        )
    
}