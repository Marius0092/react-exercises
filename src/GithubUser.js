import { useGithubUsers } from "./useGithubUser"



export function GithubUser({ username }) {

    const { data, loading, error, handleRefreshUsers } = useGithubUsers(username)


    return (
        <div>
            {data && <h1>{data.name}</h1>}
            {loading && <h1>Loading...</h1>}
            {error && <h1>There has been an error</h1>}
            <button onClick={handleRefreshUsers}>Refresh</button>
        </div>
    )
}
