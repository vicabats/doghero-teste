import React from 'react';
import '../styles/style.css';

//Importando componentes
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ClientRegister from '../components/clientpage/ClientRegister.js';
import ListClients from '../components/clientpage/ListClients';

class Clients extends React.Component{
    constructor(){
        super()

        this.state={
            clientRegister: false,
            clientList: false,
        }
    }

    showClientRegister = () => {
        this.setState({clientRegister: !this.clientRegister})
    }

    showClientList = () => {
        this.setState({clientList: !this.clientList})
    }


    render(){
        return(
            <section>
                <header className="clients__section">
                    <Nav />
                    {this.state.clientRegister ? <ClientRegister /> : null || this.state.clientList ? <ListClients /> : null}
                    <div className="clients__buttons">
                        <button onClick={this.showClientRegister}>Cadastre-se</button>
                        <button onClick={this.showClientList}>Conheça alguns de nossos clientes</button>
                    </div>
                </header>
                <Footer />
            </section>
        )
    }
}

export default Clients;