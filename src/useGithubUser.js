import useSWR from "swr"

const fetcher = (url) => fetch(url).then((response) => response.json())

export function useGithubUsers(username) {
    const {data, error} = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)


    return {
        data,
        loading: !data && !error,
        error,
    }
}
