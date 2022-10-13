import React from "react";
import { Hello } from "./helloWorld";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name ={<strong>Johnny</strong>} age ={30} />
                <ClickCounter incrementAmount = {20} initialValue = {10} incrementInterval = {500} />
            </div>
        )
    }
}