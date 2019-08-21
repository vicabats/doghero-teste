import React from 'react';
import '../styles/style.css';

//Importando componentes
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WalkersRegister from '../components/walkerspage/WalkersRegister';

class Walkers extends React.Component{
    constructor(){
        super()

        this.state={
            WalkersRegister: false,
        }
    }

    showWalkersRegister = () => {
        this.setState({WalkersRegister: true})
    }

    render(){
        return(
            <section>
                <header className="clients__section">
                    <Nav />
                    {this.state.clientRegister ? <WalkersRegister /> : null }
                    <div className="clients__buttons">
                        <button onClick={this.showWalkersRegister}>Cadastre-se</button>
                        <button>Conheça alguns de nossos clientes</button>
                    </div>
                </header>
                <Footer />
            </section>
        )
    }
}

export default Walkers;