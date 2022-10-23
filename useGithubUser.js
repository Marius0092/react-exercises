import { useEffect, useState } from "react";

function useGithubUser({ username }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json)
                setData(json)
            })
    }, [username])

    return {
        fetchedData: data
    }
}