import React from 'react'
import Slider from "react-slick";
import "../styles/Portfolio/Portfolio.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pokedex from "../images/Pokedex-react.png"
import trivia from "../images/Triviando-vanilla.png"
import quotes from "../images/Quotes-react.png"
import rm from "../images/rmApp.png"

/* interface PrevArrowProps {
    className?: any
    style?: any
    onClick?: any
} */

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#3C3C3C", borderRadius: "50%", }}
            onClick={onClick}
        />
    )
}

const NextArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#3C3C3C", borderRadius: "50%" }}
            onClick={onClick}
        />
    )
}

const PortfolioSlider = () => {
    var settings = {
        className: "center",
        dots: true,
        accessibility: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        /*     autoplay: true,
            autoplaySpeed: 10000, */
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: []
    };
    return (
        <div className='slider-container'>
            <Slider {...settings}>
                <div >
                    <figure style={{ maxWidth: "500px", margin: "10px", borderRadius: "20px 0 20px 0", overflow: "hidden" }}>
                        <img src={pokedex} alt="" />
                    </figure>
                    <p style={{ textAlign: "justify", padding: "20px" }}>
                        This is a Pokedex where you can search diferent kind of pokemons by type, color, Id and gender. Also check the stats and can change how many pokemons you want to see on the screen.
                        All was made with ReactJs.
                    </p>
                    <a href="https://fullpokedexhmm.netlify.app/#/" target="_blank" rel="noreferrer" style={{ textDecoration: "none", textAlign: "center", padding: "20px", color: "#883337" }}>
                        Check Project
                    </a>
                </div>
                <div>
                    <figure style={{ maxWidth: "500px", margin: "10px", borderRadius: "20px 0 20px 0", overflow: "hidden" }}>
                        <img src={trivia} alt="" />
                    </figure>
                    <p style={{ textAlign: "justify", padding: "20px" }}>
                        A general info trivia where you can try your general knowledge. Just be aware, you only have 30 seconds to answer or you lost the points. This project was made with Vanilla Javascript.
                    </p>
                    <a href="https://triviando.netlify.app" target="_blank" rel="noreferrer" style={{ textDecoration: "none", textAlign: "center", padding: "20px", color: "#883337" }}>
                        Check Project
                    </a>
                </div>
                <div>
                    <figure style={{ maxWidth: "500px", margin: "10px", borderRadius: "20px 0 20px 0", overflow: "hidden" }}>
                        <img src={quotes} alt="" />
                    </figure>
                    <p style={{ textAlign: "justify", padding: "20px" }}>
                        Need a pice of advice? Here you have a lot of famouse quotes that works for any moment of your life... and you can share it on twitter :D. This project was made with ReactJs.
                    </p>
                    <a href="https://quotepack.netlify.app" target="_blank" rel="noreferrer" style={{ textDecoration: "none", textAlign: "center", padding: "20px", color: "#883337" }}>
                        Check Project
                    </a>
                </div>
                <div>
                    <figure style={{ maxWidth: "500px", margin: "10px", borderRadius: "20px 0 20px 0", overflow: "hidden" }}>
                        <img src={rm} alt="" />
                    </figure>
                    <p style={{ textAlign: "justify", padding: "20px" }}>
                        Are you a Rick and Morty fan? Well with this app you can find all the characters of the serie and you can search how many residents are in each location and some other interesting info.
                    </p>
                    <a href="https://ricknmortyapp.netlify.app" target="_blank" rel="noreferrer" style={{ textDecoration: "none", textAlign: "center", padding: "20px", color: "#883337" }}>
                        Check Project
                    </a>
                </div>
            </Slider>
        </div>
    )
}

export default PortfolioSlider