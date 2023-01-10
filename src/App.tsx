import React, { createContext, useState } from 'react';
import Main from './components/Main';
import SocialMediaMenu from './components/SocialMediaMenu';

export const StateContext = createContext({
    isDarkTheme: false,
    handleChangeTheme: () => { },
    isEnglishText: false,
    handleChangeLanguage: () => { }
})

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isEnglishText, setIsEnglishText] = useState(false);

    const handleChangeTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    const handleChangeLanguage = () => {
        setIsEnglishText(!isEnglishText)
    }


    return (
        <StateContext.Provider value={{ isDarkTheme, handleChangeTheme, isEnglishText, handleChangeLanguage }}>
            <div style={{ position: "relative" }}>
                <SocialMediaMenu />
                <Main />
            </div>
        </StateContext.Provider>
    );
}

export default App;
