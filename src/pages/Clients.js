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
            showList: false,
        }
    }

    getClients = () => {
        this.setState({showList: true, clientRegister: false});
        axios.get(`http://localhost:8080/api/clients`)
        .then((res) => {
            this.setState({clientList: res.data})
        })
        .catch(error => {
            alert("Não foi possível encontrar a lista de clientes cadastrados!")
        })     
    }

    setClient = () => {
        this.setState({clientRegister: true, showList: false});
        axios.post(`http://localhost:8080/api/clients`, {
            name: '',
            phone: '',
            cpf: '',
            email: '',
            address: ''   
        })
        .then((res) => {
            alert("Cliente cadastrado com sucesso!")
        })
        .catch(error => {
            alert("Não foi possível cadastrar o cliente. Tente novamente.")
        })
    }

        render(){
        return(
            <section>
                <header className="clients__section">
                    <Nav />
                    {this.state.clientRegister ? <ClientRegister name={this.state.name} cpf={this.state.cpf} address={this.state.address} email={this.state.email} cellphone={this.state.cellphone} /> : null}

                    {this.state.showList ? <ListClients clientList={this.state.clientList} /> : null}
                    
                    <div className="clients__buttons">
                        <button onClick={this.setClient}>Cadastre-se</button>
                        <button onClick={this.getClients}>Conheça alguns de nossos clientes</button>
                    </div>
                </header>
                <Footer />
            </section>
        )
    }
}

export default Clients;