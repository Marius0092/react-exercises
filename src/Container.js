import React from "react";

export class Container extends React.Component {
    render() {
        const style = {
            'background-color': 'white',
            'border': '1px solid red',
        }

        return <div style={style}>
            <h2>{this.props.title}</h2>
            {this.props.children}
        </div>
    }
}