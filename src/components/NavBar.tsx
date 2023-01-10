import React, { useContext } from 'react'
import { StateContext } from '../App'

const NavBar = () => {
    const { isDarkTheme, isEnglishText } = useContext(StateContext)
    return (
        <div className='navBar-container' style={isDarkTheme ? { backgroundColor: "#883337" } : {}}>
            <div className='logo-container'></div>
            <div className='menu-container'>
                {
                    isEnglishText ?
                        <ul>
                            <li>
                                <a href="#top">Home</a>
                            </li>
                            <li>
                                <a href="#profile" >Profile</a>
                            </li>
                            <li>
                                <a href="#skills" >Skills</a>
                            </li>
                            <li>
                                <a href="#portfolio" >Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact" >Contact</a>
                            </li>
                        </ul>
                        :
                        <ul>
                            <li>
                                <a href="#top">Home</a>
                            </li>
                            <li>
                                <a href="#profile" >Perfil</a>
                            </li>
                            <li>
                                <a href="#skills" >Habilidades</a>
                            </li>
                            <li>
                                <a href="#portfolio" >Portafolio</a>
                            </li>
                            <li>
                                <a href="#contact" >Contacto</a>
                            </li>
                        </ul>
                }
            </div>
        </div>
    )
}

export default NavBar