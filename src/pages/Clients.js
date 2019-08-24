import React from 'react';
import axios from 'axios';
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
            clientList: [],
        }
    }

    showClientRegisterCard = () => {
        this.setState({clientRegister: !this.state.clientRegister})
        console.log(this.state.clientRegister)
    }

    getClients = () => {
        axios.get(`http://localhost:8080/api/clients`)
        .then((res) => {
            console.log(res.data)
            this.setState({clientList: res.data})
        })
        .catch(error => {
            console.log(error)
        })
        console.log(this.state.clientList)
    }

    render(){
        return(
            <section>
                <header className="clients__section">
                    <Nav />
                    <ListClients clientList={this.state.clientList}
                    />
                    {this.state.clientRegister ? <ClientRegister /> : null}
                    <div className="clients__buttons">
                        <button onClick={this.showClientRegisterCard}>Cadastre-se</button>
                        <button onClick={this.getClients}>Conheça alguns de nossos clientes</button>
                    </div>
                </header>
                <Footer />
            </section>
        )
    }
}

export default Clients;