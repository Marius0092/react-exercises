import React from "react";
import { Counter } from "./Counter";
import { Hello } from "./helloWorld";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name ={<strong>Johnny</strong>} age ={30} />
                <Counter initialValue={0} increment={1} interval={1000} />
            </div>
        )
    }
}