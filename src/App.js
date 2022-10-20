import React from "react";
import { Container } from "./Container";
import { Login } from "./Login"
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

export class App extends React.Component {

    render() {
        function onLogin(data) {
            console.log('delle info sono state inviate: ' + data.username, data.password, data.remember)
        }
        return (
            <div>
                <Login login={(data) => onLogin(data)} />
                <UncontrolledLogin />
                <TodoList />
                <Welcome />
                <Container title="Titolo">
                   <p>
                    Prova
                   </p>
                </Container>
            </div>
        )
    }
}