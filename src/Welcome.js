import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h2>Welcome, {this.props.name}</h2>
                <Age />
            </div>

        ) 
    }
}

Welcome.defaultProps = {
    name: "Johnny"
}