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
        </section>
    )
}

export default Skills