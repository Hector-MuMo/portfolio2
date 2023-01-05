import React from 'react'
import "../styles/Skills/Skills.css"

interface SkillsCarouselProps {
    imageArray: string[]
}

const SkillsCarousel = ({ imageArray }: SkillsCarouselProps) => {

    const images = imageArray.map((value, index) => {
        return <figure className={`front-card card${index + 1}`} style={{ animationDuration: `${imageArray.length}s` }}>
            <img src={value} alt={`pic${index}`} />
        </figure>
    })

    return (
        <div className='front-carousel'>
            {images}
        </div>
    )
}

export default SkillsCarousel