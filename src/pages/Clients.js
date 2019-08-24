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
            showForm: false,
            clientList: [],
            showList: false,
        }
    }

    getClients = () => {
        this.setState({showList: true, showForm: false});
        axios.get(`http://localhost:8080/api/clients`)
        .then((res) => {
            this.setState({clientList: res.data})
        })
        .catch(error => {
            alert("Não foi possível encontrar a lista de clientes cadastrados!")
        })     
    }

    showForm = () => {
        this.setState({showForm: true, showList: false})
    }
        render(){
        return(
            <section>
                <header className="clients__section">
                    <Nav />

                    {this.state.showForm ? <ClientRegister name={this.state.name} cpf={this.state.cpf} address={this.state.address} email={this.state.email} phone={this.state.phone} enviar={this.setClient}/> : null}

                    {this.state.showList ? <ListClients clientList={this.state.clientList} /> : null}
                    
                    <div className="clients__buttons">
                        <button onClick={this.showForm}>Cadastre-se</button>
                        <button onClick={this.getClients}>Conheça alguns de nossos clientes</button>
                    </div>
                </header>
                <Footer />
            </section>
        )
    }
}

export default Clients;