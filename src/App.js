import React from "react";
import { Hello } from "./helloWorld";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name ={<strong>Johnny</strong>} age ={30} />
                <ClickCounter incrementAmount = {20} initialValue = {0} incrementInterval = {1000} />
                <ClickTracker />
            </div>
        )
    }
}