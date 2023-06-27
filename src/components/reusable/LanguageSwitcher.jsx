import {Select} from "@material-ui/core";
import {useApp} from "../../context/AppContext";

export const LanguageSwitcher = () => {
    const {lang, setLang, LANGUAGES} = useApp();

    return(
        <div className={"w-24 h-12"}>
            <Select
                className={"w-full overflow-hidden text-ellipsis bg-transparent dark:bg-ternary-dark text-ternary-dark dark:text-ternary-light"}
                defaultValue={'English'}
                value={lang}
                onChange={(e) => setLang(e.target.value)}
            >
                {LANGUAGES.map((language) => (
                    <option
                        className={"w-full h-12 bg-transparent"}
                        value={language}
                        key={language}
                        onClick={() => setLang(language)}
                    >
                        {language}
                    </option>
                ))}
            </Select>
        </div>
    )
}

export default LanguageSwitcher;