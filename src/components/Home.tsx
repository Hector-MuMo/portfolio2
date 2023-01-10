import React, { useContext } from 'react'
import "../styles/Home/HomeStyles.css"
import Typewriter from 'typewriter-effect';
import video from "../images/Abstract.mp4"
import { StateContext } from '../App';

const Home = () => {
    const { isDarkTheme, isEnglishText } = useContext(StateContext)

    return (
        <div style={{ height: "100vh", overflow: "hidden" }} >
            <div className='hero-container'>
                <video className='hero-video' autoPlay loop muted>
                    <source src={video} type='video/mp4' />
                </video>
                <div className='hero-text'>
                    <div className='typewriter-container'>
                        <Typewriter
                            options={{
                                strings: ["Web Developer", "Front-End Developer", "Back-End Developer"],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: "typewrite-styles",
                                cursorClassName: "cursor-typewrite-style"
                            }}
                        />
                    </div>
                    {isEnglishText ?
                        <button className={isDarkTheme ? "dark-button" : ""}><a href="#profile">Profile</a></button>
                        :
                        <button className={isDarkTheme ? "dark-button" : ""}><a href="#profile">Perfil</a></button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home