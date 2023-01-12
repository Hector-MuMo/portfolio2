import React, { useState, useContext, useEffect } from 'react'
import Home from './Home'
import { slide as Menu } from 'react-burger-menu'
import Profile from './Profile'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'
import NavBar from './NavBar'
import SettingsMenu from './SettingsMenu'
import { StateContext } from '../App'
import BgWhite from "../images/bgi-white.jpg";
import BgDark from "../images/bgi-dark.jpg";

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkTheme, isEnglishText } = useContext(StateContext)

    const isMenuOpen = (state: any) => {
        setIsOpen(state.isOpen)
    }

    const handleClose = () => {
        console.log(isOpen);
        if (isOpen)
            return setIsOpen(false)
    }

    useEffect(() => {
        if (isDarkTheme) {
            document.body.style.backgroundColor = "#000000"
            document.body.style.backgroundImage = `url(${BgDark})`
        } else {
            document.body.style.backgroundColor = "#ffffff"
            document.body.style.backgroundImage = `url(${BgWhite})`
        }

    }, [isDarkTheme]);

    useEffect(() => {
        window.addEventListener('scroll', function () {
            let elements = document.getElementsByClassName('scroll-content');
            let screenSize = window.innerHeight;

            for (let i = 0; i < elements.length; i++) {
                let element = elements[i];

                if (element.getBoundingClientRect().top < screenSize) {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            }
        });

        return () => {
            window.addEventListener('scroll', function () {

            });
        }
    }, []);

    return (
        <div >
            {isEnglishText ?
                <Menu onStateChange={isMenuOpen} isOpen={isOpen} className={isDarkTheme ? "dark-menu" : "light-menu"}>
                    <a href="#top" onClick={handleClose}>Home</a>
                    <a href="#profile" onClick={handleClose}>Profile</a>
                    <a href="#skills" onClick={handleClose}>Skills</a>
                    <a href="#portfolio" onClick={handleClose}>Portfolio</a>
                    <a href="#contact" onClick={handleClose}>Contact</a>
                </Menu>
                :
                <Menu onStateChange={isMenuOpen} isOpen={isOpen} className={isDarkTheme ? "dark-menu" : "light-menu"}>
                    <a href="#top" onClick={handleClose}>Home</a>
                    <a href="#profile" onClick={handleClose}>Perfil</a>
                    <a href="#skills" onClick={handleClose}>Habilidades</a>
                    <a href="#portfolio" onClick={handleClose}>Portafolio</a>
                    <a href="#contact" onClick={handleClose}>Contacto</a>
                </Menu>
            }
            <NavBar />
            <Home />
            <Profile />
            <Skills />
            <Portfolio />
            <Contact />
            <footer className="last-section">
                <small>Copyright 2023</small>
            </footer>
            <SettingsMenu />
        </div>
    )
}

export default Main