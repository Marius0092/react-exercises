import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { GithubUser } from "./GithubUser";

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
                <><Link key={index} username={user}></Link><Outlet /></>
            ))}

        </div>
    )

}

