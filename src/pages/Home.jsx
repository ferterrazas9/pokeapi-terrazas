import React from "react";
import FormHome from '../components/home/FormHome'
import home from './styles/Home.css'

const Home = () => {

    return (
        <article className="pokedex">
            <img className="pokedex__img" src="/images/home/logo.webp" alt="" />
            <header className="pokedex__head">
                <h2 className="pokedex__subtitle">Hi Trainer!</h2>
                <p className="pokedex__text">Give me your to see the Pokedex</p>
            </header>

            <FormHome />
        </article>
    )
}

export default Home

