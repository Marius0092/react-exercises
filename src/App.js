import React from "react";
import {Login} from "./Login"
import { UncontrolledLogin } from "./UncontrolledLogin";

export class App extends React.Component {
    
    render() {
        function onLogin(data){
            console.log('delle info sono state inviate: ' + data.username, data.password, data.remember)
        }
        return (
            <div>
                <Login login={(data)=>onLogin(data)}/>
                <UncontrolledLogin />
            </div>
        )
    }
}