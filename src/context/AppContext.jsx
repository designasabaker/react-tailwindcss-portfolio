import React, {useState, useContext, useEffect} from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export const LANGUAGE = {
    EN: 'English',
    CN: '简体中文',
}

export const LANGUAGES = [LANGUAGE.EN, LANGUAGE.CN]

export const AppContext = React.createContext({});

export const AppProvider = ({children}) => {
    const [lang,setLang] = useState(LANGUAGE.EN);
    const [resumeLink, setResumeLink] = useState('');

    useEffect(() => {
        const storage = getStorage();

        getDownloadURL(ref(storage, 'resume-Yihao_George_Xu_Resume.pdf'))
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'
                setResumeLink(url);
            })
            .catch((error) => {
                // Handle any errors
            });
    }, []);

    return(
        <AppContext.Provider value={{
            lang,
            setLang,
            LANGUAGE,
            LANGUAGES,
            resumeLink,
            setResumeLink,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext);

export default AppProvider;