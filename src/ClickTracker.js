import React from "react";

export class ClickTracker extends React.Component {
    state = {
        clickButton: '',
    }

    clickTrackerEvent = (event) => {
        this.setState(() => {
            return {
            clickButton: event.target.name
        }
        })
    }

    render() {
        return (
            <div>
                <h1>Last clicked button: {this.state.clickButton}</h1>
                <button name="btn1" onClick={this.clickTrackerEvent}>First Button</button>
                <button name="btn2" onClick={this.clickTrackerEvent}>Second Button</button>
                <button name="btn3" onClick={this.clickTrackerEvent}>Third Button</button>
            </div>
        )
    }

}