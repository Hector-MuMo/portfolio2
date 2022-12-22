import React from 'react'
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs"
import { SiGmail } from "react-icons/si"
import "../styles/SocialMediaMenu/SocialMediaMenu.css"

const SocialMediaMenu = () => {

    return (
        <div style={{ position: 'absolute', height: "100%" }}>
            <div className='socialMediaMenu-container'>
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