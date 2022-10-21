import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function DisplayLanguage() {
    const language = useContext(LanguageContext)
    // return <h3>Current Language: {language}</h3>
    return(
        <LanguageContext.Consumer>
            {language =>{
                return <h1>Current language: {language}</h1>
            }}
        </LanguageContext.Consumer>
    )
}