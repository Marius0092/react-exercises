import React from "react";

export class Container extends React.Component {
    render() {
        const style = {
            'background-color': 'white',
            'border': '1px solid red',
        }

        return <div style={style}>
            {this.props.children}
        </div>
    }
}