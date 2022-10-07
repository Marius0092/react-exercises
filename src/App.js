import React from "react";
import { Hello } from "./helloWorld";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name = "Johnny" />
            </div>
        )
    }
}