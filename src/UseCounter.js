import { useState } from "react";

function useCounter() {
    const [counter, setCounter] = useState(0)

    function handleCounterIncrement() {
        setCounter((c) => c + 1)
    }

    function handleCounterDecrement() {
        setCounter((c) => c - 1)
    }

    function handleCounterReset() {
        setCounter(0)
    }

    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset
    }
}

export function HookCounter() {
    const { counter, onIncrement, onDecrement, onReset } = useCounter()

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}