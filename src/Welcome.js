import React from "react";

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p className='index'>Hello, {this.props.name}</p>
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: "Johnny"
}