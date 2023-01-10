import React, { useContext } from 'react'
import "../styles/Skills/Skills.css"
import { StateContext } from '../App'
import SkillsCarousel from './SkillsCarousel'
import html from "../images/html5.png"
import css from "../images/css3.png"
import js from "../images/js.png"
import ts from "../images/ts.png"
import react from "../images/react.png"
import gatsby from "../images/gatsby.png"
import NodeJs from "../images/nodeJs.png"
import express from "../images/express.png"
import mongoDb from "../images/MongoDB.png"
import git from "../images/git.png"
import figma from "../images/figma.png"
import team from "../images/team-light.png"
import darkTeam from "../images/team-dark.png"
import communication from "../images/comm-light.png"
import darkComm from "../images/comm-dark.png"
import empathy from "../images/empathy-light.png"
import DarkEmpathy from "../images/empathy-dark.png"
import wall from "../images/wall-light.png"
import darkWall from "../images/wall-dark.png"

const Skills = () => {
    const { isDarkTheme, isEnglishText } = useContext(StateContext)

    return (
        <>
            {
                isEnglishText ?
                    <section className={isDarkTheme ? "dark-section" : ""}>
                        <h2 id="skills" className={isDarkTheme ? "dark-title" : ""}>Dev Skills</h2>
                        <div className='title-divider'></div>
                        <div className='skills-container'>
                            <div className='dev-skills'>
                                <h3 className={isDarkTheme ? "dark-theme-text" : ""}>Front-End</h3>
                                <SkillsCarousel imageArray={[html, css, js, ts, react, gatsby]} />
                            </div>
                            <div className='dev-skills'>
                                <h3 className={isDarkTheme ? "dark-theme-text" : ""}>Back-End</h3>
                                <SkillsCarousel imageArray={[NodeJs, express, mongoDb]} />
                            </div>
                            <div className='dev-skills'>
                                <h3 className={isDarkTheme ? "dark-theme-text" : ""}>Others</h3>
                                <SkillsCarousel imageArray={[git, figma]} />
                            </div>
                        </div>
                        <h2 id="skills" className={isDarkTheme ? "dark-title" : ""}>Soft Skills</h2>
                        <div className='title-divider'></div>
                        <div className='soft-container'>
                            <div className='soft-text-container'>
                                <p className={isDarkTheme ? "dark-theme-text" : ""}>Team work</p>
                            </div>
                            <figure>
                                <img src={isDarkTheme ? darkTeam : team} alt="team-work" />
                            </figure>
                            <figure>
                                <img src={isDarkTheme ? darkComm : communication} alt="team-work" />
                            </figure>
                            <div className='soft-text-container'>
                                <p className={isDarkTheme ? "dark-theme-text" : ""}>Team Effective Communication</p>
                            </div>
                            <div className='soft-text-container'>
                                <p className={isDarkTheme ? "dark-theme-text" : ""}>Empathy</p>
                            </div>
                            <figure>
                                <img src={isDarkTheme ? DarkEmpathy : empathy} alt="team-work" />
                            </figure>
                            <figure>
                                <img src={isDarkTheme ? darkWall : wall} alt="team-work" />
                            </figure>
                            <div className='soft-text-container'>
                                <p className={isDarkTheme ? "dark-theme-text" : ""}>Resilience</p>
                            </div>
                        </div>
                    </section>
                    :
                    <section className={isDarkTheme ? "dark-section" : ""}>
                        <h2 id="skills" className={isDarkTheme ? "dark-title" : ""}>Habilidades de Desarrollo</h2>
                        <div className='title-divider'></div>
                        <div className='skills-container'>
                            <div className='dev-skills'>
                                <h3 className={isDarkTheme ? "dark-theme-text" : ""}>Front-End</h3>
                                <SkillsCarousel imageArray={[html, css, js, ts, react, gatsby]} />
                            </div>
                            <div className='dev-skills'>
                                <h3 className={isDarkTheme ? "dark-theme-text" : ""}>Back-End</h3>
                                <SkillsCarousel imageArray={[NodeJs, express, mongoDb]} />
                            </div>
                            <div className='dev-skills'>
                                <h3 className={isDarkTheme ? "dark-theme-text" : ""}>Otras</h3>
                                <SkillsCarousel imageArray={[git, figma]} />
                            </div>
                        </div>
                        <h2 id="skills" className={isDarkTheme ? "dark-title" : ""}>Habilidades Blandas</h2>
                        <div className='title-divider'></div>
                        <div className='soft-container'>
                            <div className='soft-text-container'>
                                <p className={isDarkTheme ? "dark-theme-text" : ""}>Trabajo en Equipo</p>
                            </div>
                            <figure>
                                <img src={isDarkTheme ? darkTeam : team} alt="team-work" />
                            </figure>
                            <figure>
                                <img src={isDarkTheme ? darkComm : communication} alt="team-work" />
                            </figure>
                            <div className='soft-text-container'>
                                <p className={isDarkTheme ? "dark-theme-text" : ""}>Communicación Efectiva</p>
                            </div>
                            <div className='soft-text-container'>
                                <p className={isDarkTheme ? "dark-theme-text" : ""}>Empatía</p>
                            </div>
                            <figure>
                                <img src={isDarkTheme ? DarkEmpathy : empathy} alt="team-work" />
                            </figure>
                            <figure>
                                <img src={isDarkTheme ? darkWall : wall} alt="team-work" />
                            </figure>
                            <div className='soft-text-container'>
                                <p className={isDarkTheme ? "dark-theme-text" : ""}>Resiliencia</p>
                            </div>
                        </div>
                    </section>
            }
        </>
    )
}

export default Skills