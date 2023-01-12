import { useContext } from 'react'
import "../styles/Home/HomeStyles.css"
import Typewriter from 'typewriter-effect';
import { StateContext } from '../App';

const Home = () => {
    const { isDarkTheme, isEnglishText } = useContext(StateContext)

    return (
        <div style={{ height: "100vh", overflow: "hidden" }} >
            <div className='hero-container'>
                <div className='hero-text'>
                    <div className={isDarkTheme ? 'dark-main-title-container' : 'main-title-container'}>
                        {
                            isEnglishText ?
                                <>
                                    <p>WELCOME TO MY SPACE AS</p>
                                </>
                                :
                                <>
                                    <p>BIENVENIDO A MI ESPACIO COMO </p>
                                </>
                        }
                        <p className='webDev-title'>WEB DEVELOPER</p>
                        <div className='typewrite-container'>
                            <span>{`${"<"}`}</span>
                            <Typewriter
                                options={{
                                    strings: ["Front-End ", "Back-End"],
                                    autoStart: true,
                                    loop: true,
                                    wrapperClassName: "typewrite-styles",
                                    cursorClassName: "cursor-typewrite-style"
                                }}
                            />
                            <span>{`${">"}`}</span>
                        </div>
                    </div>
                    {isEnglishText ?
                        <button className={isDarkTheme ? "dark-button" : ""}><a href="#profile">About me</a></button>
                        :
                        <button className={isDarkTheme ? "dark-button" : ""}><a href="#profile">Conoceme</a></button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home