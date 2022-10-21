import React from "react";

export function Sum({numbers=[1,2,7]}) {
    let result = numbers.reduce((a, b) => a + b)

    return (
        <h1>{result}</h1>
    )
}