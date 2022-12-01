import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./Welcome";


export function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome name="Mario" />} />
                <Route path="/counter" element={<Counter />} />
                {/* <Route path="users/:username" element={<ShowGithubUser />} /> */}
                <Route path="/82375823y" element={<p>Not found</p>} />
                <Route path="/users" element={<GithubUserList />}>
                    <Route index element={<p>Add a user and select it</p>} />
                    <Route path=":username" element={<ShowGithubUser />} />
                </Route>
            </Routes>

            <div>
                <Link to="./"><h2>Home</h2></Link>
                <Link to="./Counter"><h2>Counter</h2></Link>
                <Link to="users/:username"><h2>User</h2></Link>
            </div>
        </div>
    )
}
