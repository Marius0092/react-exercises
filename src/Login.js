import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false
    }

    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const checked = event.target.checked
        const type = event.target.type

        this.setState(
            {
                [name]: type === "checkbox" ? checked : value
            })
    }

        
        onLogin = () => {
            console.log('delle info sono state inviate: ' + this.state.username, this.state.password, this.state.remember)
        };

    render() {
        return (
            <div>
                <input name='username' value={this.state.username} onChange={this.handleInputChange} />
                <input name='password' value={this.state.password} type='password' onChange={this.handleInputChange} />
                <input name='remember' type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
                {/* <button type='submit' disabled={!this.state.username || !this.state.password} onClick={this.handleLogin}>Login</button> */}
                <button name="loginButton" type="submit" onClick={()=>this.onLogin()} disabled={this.state.username==="" && this.state.password===""}>Login</button>
            </div>
        )
    }
}
