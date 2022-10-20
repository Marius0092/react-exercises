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

    handleReset = () => {
        this.setState({
            items: []
        })
    }

    handleRemove = (key) => {
        const filteredItems = this.state.items.filter(item => item!==key);
        this.setState({
            items:filteredItems
        })
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.items, this.handleRemove)}
                <div>
                    <input name='todo' type='text' onChange={this.handleInput} value={this.state.newItem}></input>
                    <button type='button' onClick={this.addItem}>Add</button>
                    <button type='button' onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        )
    }
}