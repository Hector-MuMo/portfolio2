import React, { useContext } from 'react'
import { StateContext } from '../App'
import Photo3 from "../images/yo3.jpeg"
import Photo2 from "../images/yo2.jpeg"
import Photo1 from "../images/me-relight.jpeg"
import Photo4 from "../images/yo-relight.jpeg"
import "../styles/Profile/Profile.css"

const Profile = () => {
    const { isDarkTheme, isEnglishText } = useContext(StateContext)

    return (
        <>
            {
                isEnglishText ?
                    <section className={isDarkTheme ? "dark-section" : "section"}>
                        <h2 id="profile" className={isDarkTheme ? "dark-title" : ""}>Profile</h2>
                        <div className="title-divider"></div>
                        <p className={isDarkTheme ? "dark-profile-intro" : "profile-intro"}>Hi! I'm Hector Muñoz, and <span style={{ textDecoration: "underline" }}>I'm ready for challenges.</span> </p>
                        <div className='profile-container'>
                            <p className={isDarkTheme ? "dark-p" : ""}>
                                I’m a Web Developer, graduated from Academlo bootcamp where I had the opportunity to learn the bases from some languages like HTML, CSS, JavaScript, React, Node.js and Python.
                            </p>
                            <div className={isDarkTheme ? "dark-divider" : "divider"} ></div>
                            <figure className='fading'>
                                <img className='imgBottom' src={Photo3} alt="yo Y Rita" />
                                <img className='imgTop' src={Photo2} alt="yo Y Rita" />
                            </figure>
                            <div className={isDarkTheme ? "dark-divider" : "divider"}></div>
                            <p className={isDarkTheme ? "dark-p" : ""}>While I’m studying, I participated in some real projects where I apply all that knowledge and learn to work with agile methodologies like SCRUM.</p>
                            <div className={isDarkTheme ? "dark-divider" : "divider"}></div>
                            <figure className='fading'>
                                <img className='imgBottom' src={Photo1} alt="yo Y Rita" />
                                <img className='imgTop' src={Photo4} alt="yo Y Rita" />
                            </figure>
                            <div className={isDarkTheme ? "dark-divider" : "divider"}></div>
                            <p className={isDarkTheme ? "dark-p" : ""}>I consider myself a persistent person, who likes to work in a team, solve problems and doing activities in the most orderly and legible way possible. I am currently looking for a job opportunity to continue improving myself and contribute with soft and hard skills. </p>
                        </div>
                    </section>
                    :
                    <section className={isDarkTheme ? "dark-section" : "section"}>
                        <h2 id="profile" className={isDarkTheme ? "dark-title" : ""}>Perfil</h2>
                        <div className="title-divider"></div>
                        <p className={isDarkTheme ? "dark-profile-intro" : "profile-intro"}>Hola! Soy Hector Muñoz, y <span style={{ textDecoration: "underline" }}>Estoy listo para los retos.</span> </p>
                        <div className='profile-container'>
                            <p className={isDarkTheme ? "dark-p" : ""}>
                                Soy un Desarrollador Web graduado del Bootcamp de Academlo donde tuve la oportunidad de aprender las bases de algunos lenguajes como HTML, CSS, Javascript, React, Node.js y Python.
                            </p>
                            <div className={isDarkTheme ? "dark-divider" : "divider"} ></div>
                            <figure className='fading'>
                                <img className='imgBottom' src={Photo3} alt="yo Y Rita" />
                                <img className='imgTop' src={Photo2} alt="yo Y Rita" />
                            </figure>
                            <div className={isDarkTheme ? "dark-divider" : "divider"}></div>
                            <p className={isDarkTheme ? "dark-p" : ""}>
                                Mientras estudiaba, participé en algunos proyectos donde apliqué todos mis conocimientos adquiridos y aprendí a trabajar un poco con la metodología agil de SCRUM.
                            </p>
                            <div className={isDarkTheme ? "dark-divider" : "divider"}></div>
                            <figure className='fading'>
                                <img className='imgBottom' src={Photo1} alt="yo Y Rita" />
                                <img className='imgTop' src={Photo4} alt="yo Y Rita" />
                            </figure>
                            <div className={isDarkTheme ? "dark-divider" : "divider"}></div>
                            <p className={isDarkTheme ? "dark-p" : ""}>
                                Me considero una persona persistente, a la que le gusta trabajar en equipo, resolver problemas y realizar actividades con el mayor orden y legibilidad posible. Actualmente estoy en busca de una nueva oportunidad de trabajo para continuar mejorando y contribuir con mis habilidades como desarrollador y como persona.
                            </p>
                        </div>
                    </section>
            }
        </>
    )
}

export default Profile