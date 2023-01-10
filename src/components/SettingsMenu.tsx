import React, { useContext } from 'react'
import { BsTranslate, BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { StateContext } from '../App'

const SettingsMenu = () => {
    const { isDarkTheme, handleChangeTheme, handleChangeLanguage } = useContext(StateContext)

    return (
        <div className='settingsMenu-cotainer'>
            <div className='settingButton-container' onClick={handleChangeLanguage}>
                <BsTranslate className={isDarkTheme ? 'dark-theme-icon' : "light-theme-icon"} />
            </div>
            <div className='settingButton-container' onClick={handleChangeTheme} >
                {isDarkTheme ?
                    <BsSunFill className={isDarkTheme ? 'dark-theme-icon' : "light-theme-icon"} />
                    :
                    <BsFillMoonStarsFill className={isDarkTheme ? 'dark-theme-icon' : "light-theme-icon"} />
                }
            </div>
        </div>
    )
}

export default SettingsMenu