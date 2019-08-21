import React from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';

class Select extends React.Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return (
            <section className="select__section">
                <div className="select__card">
                    <h1>Bem-vindo ao novo serviço de passeio da DogHero!</h1>
                    <h2>Estamos lançando um novo serviço de passeios com muitas novidades e atrações para seu amigo de quatro patas. Ficou interessado?</h2>
                    <div>
                        <button><Link to='/clients'><span>Sou dono de pet</span></Link></button>
                        <button><Link to='/walkers'><span>Sou passeador</span></Link></button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Select;