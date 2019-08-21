import React from 'react';
import '../styles/style.css';

//Importando componentes
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ClientRegister from '../components/clientpage/ClientRegister.js';

class Clients extends React.Component{
    constructor(){
        super()

        this.state={
            clientRegister: false,
        }
    }

    showClientRegister = () => {
        this.setState({clientRegister: true})
    }


    render(){
        return(
            <section>
                <header className="client__section">
                    <Nav />
                    {this.state.clientRegister ? <ClientRegister /> : null }
                    <div className="client__buttons">
                        <button onClick={this.showClientRegister}>Cadastre-se</button>
                        <button>Conheça alguns de nossos clientes</button>
                    </div>
                </header>
                <Footer />
            </section>
        )
    }
}

export default Clients;