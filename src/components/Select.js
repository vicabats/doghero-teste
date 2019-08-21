import React from 'react';
import '../styles/style.css';

class Select extends React.Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return (
            <section className="selection__section">
                <div className="selection__card">
                    <h1>Bem-vindo ao novo serviço de passeio da DogHero!</h1>
                    <h2>Estamos lançando um novo serviço de passeios com muitas novidades e atrações para seu amigo de quatro patas. Ficou interessado?</h2>
                    <div>
                        <button>Sou dono de pet</button>
                        <button>Sou passeador</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Select;