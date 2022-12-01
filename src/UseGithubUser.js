
import { useState } from 'react';


export function UseGithubUser(username) {

    const [data, setData] = useState(null)
    async function fetchData(username) {

        const response = await fetch(`https://api.github.com/users/${username}`)
        const json = await response.json()
        setData(json)


    }
    return {

        data,
        fetchData

    }
}
