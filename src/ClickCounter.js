import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class ClickCounter extends React.Component {
    state = {
        count: this.props.initialValue,
    }

    // componentDidMount() {                
    //     setInterval(() => {
    //         this.setState((state) => {
    //             return { count: state.count + this.props.increment }
    //         })
    //     }, this.props.interval)
    // }

    counterIncrement = () => {
        this.setState(state => {
            return {
                count: state.count + this.props.incrementAmount
            }
        })
    }

    render(){
        return (
            <div>
                <CounterDisplay count = {this.state.count} />
                <button onClick={this.counterIncrement}>Increment</button>
            </div>
        )
    }
}