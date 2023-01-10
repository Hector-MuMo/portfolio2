import React, { useContext } from 'react'
import PortfolioSlider from './PortfolioSlider'
import { StateContext } from '../App'

const Portfolio = () => {
    const { isDarkTheme, isEnglishText } = useContext(StateContext)

    return (
        <section className={isDarkTheme ? "dark-section" : ""}>
            {
                isEnglishText ?
                    <h2 id="portfolio" className={isDarkTheme ? "dark-title" : ""}>Portfolio</h2>
                    :
                    <h2 id="portfolio" className={isDarkTheme ? "dark-title" : ""}>Portafolio</h2>
            }
            <div className='title-divider'></div>
            <PortfolioSlider />
        </section>
    )
}

export default Portfolio