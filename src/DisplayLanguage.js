import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

const text = {
    en: {
        msg: "English version"
    },
    it: {
        msg: "Versione italiana"
    }
}

export function DisplayLanguage() {
    const language = useContext(LanguageContext)
    return (
        <h1>{text[language].msg}</h1>

    )
}