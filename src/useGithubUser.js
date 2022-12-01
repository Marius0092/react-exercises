import useSWR from "swr"

const fetcher = (url) => fetch(url).then((response) => response.json())

export function useGithubUsers(username) {
    const {data, error, mutate} = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher);

    function handleRefreshUsers() {
        mutate();
      }



    return {
        data,
        loading: !data && !error,
        error,
        handleRefreshUsers
    }
}
