import React, { useState, useEffect, useContext } from 'react'
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs"
import { SiGmail } from "react-icons/si"
import { StateContext } from '../App'
import "../styles/SocialMediaMenu/SocialMediaMenu.css"

const SocialMediaMenu = () => {
    const [isVisible, setIsVisible] = useState(true);
    const { isDarkTheme } = useContext(StateContext)

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])

    const listenToScroll = () => {
        let heightToHideFrom = 3100;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    return (
        <div style={isVisible ? {
            position: 'absolute', height: "100%", transition: "left 1s ease", left: "0",
        } : { position: 'absolute', height: "100%", left: "-100px", transition: "left 1s ease" }}
        >
            <div className={isDarkTheme ? "dark-socialMediaMenu-container" : "socialMediaMenu-container"}>
                <a target="_blank" rel='noreferrer' href="https://api.whatsapp.com/send?phone=522464594943">
                    <BsWhatsapp style={{ cursor: "pointer" }} />
                </a>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/hector-muz-mos/">
                    <BsLinkedin style={{ cursor: "pointer" }} />
                </a>
                <a target="_blank" rel='noreferrer' href="https://github.com/Hector-MuMo">
                    <BsGithub style={{ cursor: "pointer" }} />
                </a>
                <a target="_blank" rel='noreferrer' href="https://mail.google.com/mail/?view=cm&fs=1&to=munozmoraleshector@gmail.com&su=Project%20Idea">
                    <SiGmail style={{ cursor: "pointer" }} />
                </a>
            </div>
        </div>
    )
}

export default SocialMediaMenu