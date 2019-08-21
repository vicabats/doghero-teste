import React from 'react';
import '../styles/style.css';

//Importanto componentes
import Nav from './Nav'

function Header() {
    return (
        <header className="header__section">
            <div className="header__banner">
               <Nav /> 
            </div>
            
        </header>
    )
}

export default Header;