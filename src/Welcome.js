import React from "react";

export class Welcome extends React.Component {
    render() {
        return (
            // (this.props.age > 18 && this.props.age < 65 && this.props.name == 'John') && <Age age={this.props.age} />
            <div>
                <p className='index'>Hello, {this.props.name}</p>
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: "Johnny"
}