import React from 'react'
import "../styles/Skills/Skills.css"
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
import communication from "../images/comm-light.png"
import empathy from "../images/empathy-light.png"
import wall from "../images/wall-light.png"

const Skills = () => {
    return (
        <section>
            <h2 id="skills">Dev Skills</h2>
            <div className='title-divider'></div>
            <div className='skills-container'>
                <h3>Front-End</h3>
                <SkillsCarousel imageArray={[html, css, js, ts, react, gatsby]} />
                <h3>Back-End</h3>
                <SkillsCarousel imageArray={[NodeJs, express, mongoDb]} />
                <h3>Others</h3>
                <SkillsCarousel imageArray={[git, figma]} />
            </div>
            <h2 id="skills">Soft Skills</h2>
            <div className='title-divider'></div>
            <div className='soft-container'>
                <div className='soft-text-container'>
                    <p>Team work</p>
                </div>
                <figure>
                    <img src={team} alt="team-work" />
                </figure>
                <figure>
                    <img src={communication} alt="team-work" />
                </figure>
                <div className='soft-text-container'>
                    <p>Team Effective Communication</p>
                </div>
                <div className='soft-text-container'>
                    <p>Empathy</p>
                </div>
                <figure>
                    <img src={empathy} alt="team-work" />
                </figure>
                <figure>
                    <img src={wall} alt="team-work" />
                </figure>
                <div className='soft-text-container'>
                    <p>Resilience</p>
                </div>
            </div>
        </section>
    )
}

export default Skills