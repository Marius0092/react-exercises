import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {
    const [username, setUsername] = useState(null)
    const [usernames, setUsernames] = useState([])


    const handleInput = (event) => {
        setUsername(event.target.value)
    }

    const addUsername = () => {
        setUsernames((users) => [...users, username])
    }

    return (
        <div>
            <input onChange={handleInput}></input>
            <button onClick={addUsername}>Add</button>
            {usernames.map((user, index) => (
                <GithubUser key={index} username={user} />
            ))}
        </div>
    )

}

