import React, { useContext } from 'react'
import Slider from "react-slick";
import { StateContext } from '../App';
import "../styles/Portfolio/Portfolio.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pokedex from "../images/Pokedex-react.png"
import trivia from "../images/Triviando-vanilla.png"
import quotes from "../images/Quotes-react.png"
import rm from "../images/rmApp.png"

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "#3C3C3C", borderRadius: "50%", }}
            onClick={onClick}
        />
    )
}

const NextArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "#3C3C3C", borderRadius: "50%" }}
            onClick={onClick}
        />
    )
}

const PortfolioSlider = () => {
    const { isDarkTheme, isEnglishText } = useContext(StateContext)
    var settings = {
        className: "center",
        dots: true,
        accessibility: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: []
    };

    return (
        <div className="slider-container" style={isDarkTheme ? { border: "3px solid #883337" } : {}}>
            {
                isEnglishText ?
                    <Slider {...settings}>
                        <div >
                            <figure className='slider-img' >
                                <img src={pokedex} alt="" />
                            </figure>
                            <p style={{ textAlign: "justify", padding: "20px" }} className={isDarkTheme ? "dark-theme-text" : ""}>
                                This is a Pokedex where you can search diferent kind of pokemons by type, color, Id and gender. Also check the stats and can change how many pokemons you want to see on the screen.
                                All was made with ReactJs.
                            </p>
                            <a href="https://fullpokedexhmm.netlify.app/#/" target="_blank" rel="noreferrer" className={isDarkTheme ? "dark-a" : "light-a"}>
                                Check Project
                            </a>
                        </div>
                        <div>
                            <figure className='slider-img'>
                                <img src={trivia} alt="" />
                            </figure>
                            <p style={{ textAlign: "justify", padding: "20px" }} className={isDarkTheme ? "dark-theme-text" : ""}>
                                A general info trivia where you can try your general knowledge. Just be aware, you only have 30 seconds to answer or you lost the points. This project was made with Vanilla Javascript.
                            </p>
                            <a href="https://triviando.netlify.app" target="_blank" rel="noreferrer" className={isDarkTheme ? "dark-a" : "light-a"}>
                                Check Project
                            </a>
                        </div>
                        <div>
                            <figure className='slider-img'>
                                <img src={quotes} alt="" />
                            </figure>
                            <p style={{ textAlign: "justify", padding: "20px" }} className={isDarkTheme ? "dark-theme-text" : ""}>
                                Need a pice of advice? Here you have a lot of famouse quotes that works for any moment of your life... and you can share it on twitter :D. This project was made with ReactJs.
                            </p>
                            <a href="https://quotepack.netlify.app" target="_blank" rel="noreferrer" className={isDarkTheme ? "dark-a" : "light-a"}>
                                Check Project
                            </a>
                        </div>
                        <div>
                            <figure className='slider-img'>
                                <img src={rm} alt="" />
                            </figure>
                            <p style={{ textAlign: "justify", padding: "20px" }} className={isDarkTheme ? "dark-theme-text" : ""}>
                                Are you a Rick and Morty fan? Well with this app you can find all the characters of the serie and you can search how many residents are in each location and some other interesting info.
                            </p>
                            <a href="https://ricknmortyapp.netlify.app" target="_blank" rel="noreferrer" className={isDarkTheme ? "dark-a" : "light-a"}>
                                Check Project
                            </a>
                        </div>
                    </Slider>
                    :
                    <Slider {...settings}>
                        <div >
                            <figure className='slider-img' >
                                <img src={pokedex} alt="" />
                            </figure>
                            <p style={{ textAlign: "justify", padding: "20px" }} className={isDarkTheme ? "dark-theme-text" : ""}>
                                Esta es una Pokedex donde puedes realizar busquedas de diferentes pokemons por su tipo, color, Id y genero. También se puede consultar las estadisticas y habilidades y configurar el número de pokemons que te gustaría ver en pantalla.

                                El proyecto fue realiza con ReactJS.
                            </p>
                            <a href="https://fullpokedexhmm.netlify.app/#/" target="_blank" rel="noreferrer" className={isDarkTheme ? "dark-a" : "light-a"}>
                                Revisa el proyecto
                            </a>
                        </div>

                        <div>
                            <figure className='slider-img'>
                                <img src={trivia} alt="" />
                            </figure>
                            <p style={{ textAlign: "justify", padding: "20px" }} className={isDarkTheme ? "dark-theme-text" : ""}>
                                Este es un juego de trivia de preguntas generales donde puede poner a prueba tus conocimientos. Solo recuerda que tiene 30 segundos para responder la pregunta o irás perdiendo puntos. Este proyecto fue hecho con Javascript Vanilla.
                            </p>
                            <a href="https://triviando.netlify.app" target="_blank" rel="noreferrer" className={isDarkTheme ? "dark-a" : "light-a"}>
                                Revisa el proyecto
                            </a>
                        </div>
                        <div>
                            <figure className='slider-img'>
                                <img src={quotes} alt="" />
                            </figure>
                            <p style={{ textAlign: "justify", padding: "20px" }} className={isDarkTheme ? "dark-theme-text" : ""}>
                                Necesitas un consejo? Aquí tienes muchos frases famosas que aplican a diferentes momentos de la vida diaria... y los puedes compartir en twitter :D.
                                El proyecto fue realiza con ReactJS.
                            </p>
                            <a href="https://quotepack.netlify.app" target="_blank" rel="noreferrer" className={isDarkTheme ? "dark-a" : "light-a"}>
                                Revisa el proyecto
                            </a>
                        </div>
                        <div>
                            <figure className='slider-img'>
                                <img src={rm} alt="" />
                            </figure>
                            <p style={{ textAlign: "justify", padding: "20px" }} className={isDarkTheme ? "dark-theme-text" : ""}>
                                Eres un fanatico de la serie Rick y Morty? Bien pues con esta app puede encontrar a todos los personajes de la serie y realizar una busqueda de cuantos residentes hay en cada ubicación ademas de otros datos interesantes.
                            </p>
                            <a href="https://ricknmortyapp.netlify.app" target="_blank" rel="noreferrer" className={isDarkTheme ? "dark-a" : "light-a"}>
                                Revisa el proyecto
                            </a>
                        </div>
                    </Slider>
            }
        </div>
    )
}

export default PortfolioSlider