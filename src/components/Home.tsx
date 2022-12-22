import React from 'react'
import "../styles/Home/HomeStyles.css"
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <section>
            <div className='hero-container'>
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
                    <button>Profile</button>
                </div>
            </div>
        </section>
    )
}

export default Home