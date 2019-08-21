import React from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';

//Importando logo
import logo from '../imgs/logo.png'


function Nav() {
    return (
        <section className="nav__section">
            <div>
                <img src={logo} alt="Logo da DogHero"></img>
            </div>
            <ul className="nav__menu">
                <li><Link to='/'>Home</Link></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.doghero.com.br/">Ir para DogHero</a></li>
            </ul>
        </section>
    )
}

export default Nav;