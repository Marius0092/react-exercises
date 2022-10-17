import React from "react";

export class UncontrolledLogin extends React.Component {
    handleLogin = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;

        console.log({ username, password, remember })
    }

    render() {
        return(
        <div>
            <form onSubmit={this.handleLogin}>
                <input name="username" autoFocus/>
                <input name="password" type="password" />
                <input name="remember" type="checkbox" />

                <button type="submit">Login</button>
            </form>
        </div>
        )
    }
}