import React from "react";

export class TodoList extends React.Component {

    state = {
        items: [],
        newItem: '',
    }

    handleInput = (event) => {
        this.setState({
            newItem: event.target.value,
        })
    }

    addItem = () => {
        this.setState({
            items: [...this.state.items, this.state.newItem],
            newItem:''
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map((item) => <li>{item}</li>)}
                </ul>
                <div>
                    <input name='todo' type='text' onChange={this.handleInput} value={this.state.newItem}></input>
                    <button type='button' onClick={this.addItem}>Add</button>
                </div>
            </div>
        )
    }
}