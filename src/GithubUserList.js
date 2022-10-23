import { useEffect, useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {
    const [username, setUsername] = useState(null)
    const [array, setUsernames] = useState([])


    const handleInput = (event) => {
        setUsername(event.target.value)
    }

    const addUsername = () => {
        setUsernames((users) => [...users, username])
    }

    useEffect(() => {
        console.log(array)
    }, [array])

    return (
        <div>
            <input onChange={handleInput}></input>
            <button onClick={addUsername}>Add</button>
            {array.map((user, index) => (
                <GithubUser key={index} username={user} />
            ))}
        </div>
    )

}

