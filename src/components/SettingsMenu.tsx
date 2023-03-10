import React, { useContext } from 'react'
import { BsTranslate, BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { StateContext } from '../App'

const SettingsMenu = () => {
    const { isDarkTheme, handleChangeTheme, handleChangeLanguage } = useContext(StateContext)

    return (
        <div className='settingsMenu-cotainer'>
            <div className='settingButton-container' onClick={handleChangeLanguage}>
                <BsTranslate /* className={isDarkTheme ? 'dark-theme-icon' : "light-theme-icon"}  */ style={{ fontSize: "25px", color: "#0B9DF5", cursor: "pointer" }} />
            </div>
            <div className='settingButton-container' onClick={handleChangeTheme} >
                {isDarkTheme ?
                    <BsSunFill /* className={isDarkTheme ? 'dark-theme-icon' : "light-theme-icon"}  */ style={{ fontSize: "25px", color: "yellow", cursor: "pointer" }} />
                    :
                    <BsFillMoonStarsFill /* className={isDarkTheme ? 'dark-theme-icon' : "light-theme-icon"} */ style={{ border: "", fontSize: "25px", color: "#fddfa0", cursor: "pointer" }} />
                }
            </div>
        </div>
    )
}

export default SettingsMenu