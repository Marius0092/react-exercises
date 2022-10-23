import { useState } from "react";

function useForm() {
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })


    function handleInput(event) {
        const { name, value, type, checked } = event.target

        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    console.log(data)

    return {
        username: data.username,
        password: data.password,
        remember: data.remember,
        inputChange: handleInput
    }

}

export function HookForm() {
    const { username, password, remember, inputChange } = useForm({
        username: '',
        password: '',
        remember: false
    })

    return (
        <form>
            <label>
                Username
                <input name="username" type="text" value={username} onChange={inputChange}></input>
            </label>
            <label>
                Password
                <input name="password" type="password" value={password} onChange={inputChange}></input>
            </label>
            <input type="checkbox" value={remember}></input>
        </form>
    )
}