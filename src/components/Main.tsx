import React, { useState } from 'react'
import Home from './Home'
import { slide as Menu } from 'react-burger-menu'
import Profile from './Profile'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);

    const isMenuOpen = (state: any) => {
        setIsOpen(state.isOpen)
    }

    const handleClose = () => {
        console.log(isOpen);
        if (isOpen)
            return setIsOpen(false)
    }

    return (
        <div >
            <Menu onStateChange={isMenuOpen} isOpen={isOpen}>
                <a href="#top" onClick={handleClose}>Home</a>
                <a href="#profile" onClick={handleClose}>Profile</a>
                <a href="#skills" onClick={handleClose}>Skills</a>
                <a href="#portfolio" onClick={handleClose}>Portfolio</a>
                <a href="#contact" onClick={handleClose}>Contact</a>
            </Menu>
            <Home />
            <Profile />
            <Skills />
            <Portfolio />
            <Contact />
            <footer className='last-section'>
                <small>Copyright 2023</small>
            </footer>
        </div>
    )
}

export default Main