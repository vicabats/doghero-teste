import React from 'react';
import '../styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <footer className="footer__section">
            <p>Site desenvolvido por Vitória Batistoti como teste para vaga de Software Engineer Jr.</p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/vicabats"><li><FontAwesomeIcon icon={faGithubSquare} /></li></a>
        </footer>
    )
}

export default Footer;