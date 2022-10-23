import React from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";
import { Welcome } from "./Welcome";
import { Sum } from "./Sum";
import { ClickCounter } from "./ClickCounter";
import { Login } from "./Login";
import { Counter } from "./Counter";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { HookCounter } from "./UseCounter";
import { HookForm } from "./HookForm";

export function App() {

    const [language, setLanguage] = useState("en");

    function handleChangeLanguage(event) {
        setLanguage(event.target.value);
    }

    return (
        <div>
            <select value={language} onChange={handleChangeLanguage}>
                <option value="en">English</option>
                <option value="it">Italiano</option>
            </select>
            <LanguageContext.Provider value={language}>
                <DisplayLanguage />
            </LanguageContext.Provider>
            <Welcome />
            <Sum />
            <ClickCounter onCounterChange={(counter) => {
                return console.log(`current value is ${counter}`)
            }} />
            <Login />
            <Counter />
            <GithubUser username="Marius0092" />
            <GithubUserList />
            <HookCounter />
            <HookForm />
        </div>
    )
}