import React from "react";

export function Welcome(props) {
    return (
        <div>
            <p className='index'>Hello, {props.name}</p>
        </div>
    )
}

Welcome.defaultProps = {
    name: "Johnny"
}