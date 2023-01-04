import React from 'react'
import "../styles/Profile/Profile.css"
import Photo3 from "../images/yo3.jpeg"
import Photo2 from "../images/yo2.jpeg"

const Profile = () => {
    return (
        <section>
            <h2 id="profile">Profile</h2>
            <div className='title-divider'></div>
            <div className='profile-container'>
                <p className='profile-intro'>Hi, I'm Hector Muñoz</p>
                <figure className='fading'>
                    <img className='imgBottom' src={Photo3} alt="yo Y Rita" />
                    <img className='imgTop' src={Photo2} alt="yo Y Rita" />
                </figure>
                <div className='divider'></div>
                <p>I’m a Web Developer graduated from Academlo bootcamp. There I was the oportunity to learn about some languajes like HTML, CSS, Javascript, React, NodeJs and Python. In the same way, while I’m studing I was doing some projects  where I apply all that knowledge. I considere myself a persistent person, who likes to work in a team to solve problems and doing activities in the most orderly and legible way possible. I am currently looking for a job opportunity to continue improving myself in the area.</p>
            </div>
        </section>
    )
}

export default Profile