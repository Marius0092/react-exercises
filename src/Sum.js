import React from "react";

export function Sum(props) {
    const numbers = props.numbers
    let result = numbers.reduce((a, b) => a + b)

    return (
        <h1>{result}</h1>
    )
}