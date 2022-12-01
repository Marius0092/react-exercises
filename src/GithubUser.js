import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
    const { data, loading, error } = useGithubUser(username);
    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error</h1>}
            {data && data.name}
            <hr></hr>
            {data && data.type}
            <hr></hr>
            {data && data.bio}
            <hr></hr>
        </div>
    );
}
