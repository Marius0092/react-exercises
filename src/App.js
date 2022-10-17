import React from "react";
import {Login} from "./Login"

export class App extends React.Component {
    
    render() {
        function onLogin(data){
            console.log('delle info sono state inviate: ' + data.username, data.password, data.remember)
        }
        return (
            <div>
                <Login login={(data)=>onLogin(data)}/>
            </div>
        )
    }
}