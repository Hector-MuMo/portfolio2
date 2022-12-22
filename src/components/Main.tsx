import React from 'react'
import Home from './Home'
import { slide as Menu } from 'react-burger-menu'
import SocialMediaMenu from './SocialMediaMenu'

const Main = () => {
    return (
        <div >
            <Menu>
                <a id="home" href="/">Home</a>
                <a id="profile" href="/">Profile</a>
                <a id="skills" href="/">Skills</a>
                <a id="portfolio" href="/">Portfolio</a>
                <a id="Contact" href="/">Contact</a>
            </Menu>
            <SocialMediaMenu />
            <Home />
        </div>
    )
}

export default Main