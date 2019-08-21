import React from 'react';
import '../styles/style.css';

//Importando logo
import logo from '../imgs/logo.png'


function Nav() {
    return (
        <section className="nav__section">
            <div>
                <img src={logo} alt="Logo da DogHero"></img>
            </div>
            <ul className="nav__menu">
                <li><a target="_blank" rel="noopener noreferrer" href="https://hospedagem.doghero.com.br/hotel-para-cachorro/">Serviços de hospedagem</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.doghero.com.br/">Ir para DogHero</a></li>
            </ul>
        </section>
    )
}

export default Nav;