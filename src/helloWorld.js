import React, { Fragment } from "react"
import { Message } from "./message"

export class Hello extends React.Component {
    render() {
        return (
            <Fragment>
                <h1>Hello, World!</h1>
                <p>What a beatiful day!</p> 
                <Message />               
            </Fragment>
        )        
    }
}