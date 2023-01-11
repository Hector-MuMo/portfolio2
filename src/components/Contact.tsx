import React, { useContext } from 'react'
import { StateContext } from '../App'
import wp from "../images/wp.png"
import linkedIn from "../images/linkedIn.png"
import gmail from "../images/gmail.png"
import cv from "../images/cv.png"
import "../styles/Contact/Contact.css"

const Contact = () => {
    const { isDarkTheme, isEnglishText } = useContext(StateContext)

    const handleClick = () => {
        fetch('HectorCV.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'HectorCV.pdf';
                alink.click();
            })
        })
    }

    return (
        <section className={isDarkTheme ? "dark-section scroll-content fadeBottom" : "scroll-content fadeBottom"}>
            {
                isEnglishText ?
                    <h2 id="contact">Contact me</h2>
                    :
                    <h2 id="contact">Contactame</h2>
            }
            <div className='title-divider'></div>
            <div className='contact-container'>
                {
                    isEnglishText ?
                        <p className={isDarkTheme ? "dark-contact-msg" : 'contact-msg'}>Send me a message or check my CV</p>
                        :
                        <p className={isDarkTheme ? "dark-contact-msg" : 'contact-msg'}>Envíame un mensaje o revisa mi CV</p>
                }
                <a target="_blank" rel='noreferrer' href="https://api.whatsapp.com/send?phone=522464594943" className='contact-ws'>
                    <img src={wp} alt='whatsapp' />
                </a>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/hector-muz-mos/" className='contact-ws'>
                    <img src={linkedIn} alt='linkedIn' />
                </a>
                <a target="_blank" rel='noreferrer' href="https://mail.google.com/mail/?view=cm&fs=1&to=munozmoraleshector@gmail.com&su=Project%20Idea" className='contact-ws'>
                    <img src={gmail} alt='gmail' />
                </a>
                <figure onClick={handleClick} className='contact-ws' >
                    <img src={cv} alt='gmail' />
                </figure>
            </div>
        </section>
    )
}

export default Contact