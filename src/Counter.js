import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter() {

    const [count, setCount] = useState(0)


    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count + 1)
        }, 1000)

        return () => clearInterval(timer)

    }, [count])




    return (
        <div>
            <CounterDisplay count={count} />
        </div>
    )

}
