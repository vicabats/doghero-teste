import React from 'react';
import '../styles/style.css';
import axios from 'axios';

//Importando componentes
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WalkersRegister from '../components/walkerspage/WalkersRegister';
import ListWalkers from '../components/walkerspage/ListWalkers';

class Walkers extends React.Component{
    constructor(){
        super()

        this.state={
            showForm: false,
            walkerList: [],
            showList: false,
        }
    }

    getWalkers = () => {
        this.setState({showList: true, showForm: false})
        axios.get(`http://localhost:8080/api/walkers`)
        .then((res) => {
            this.setState({walkerList: res.data})
        })
        .catch(error => {
            alert("Não foi possível encontrar os passeadores cadastrados na plataforma!")
        })
    }

    showForm = () => {
        this.setState({showForm: true, showList: false});
    }

    render(){
        return(
            <section>
                <header className="walkers__section">
                    <Nav />

                    {this.state.showForm ? <WalkersRegister name={this.state.name} cpf={this.state.cpf} address={this.state.address} email={this.state.email} phone={this.state.phone} enviar={this.setClient}/> : null}

                    {this.state.showList ? <ListWalkers walkerList={this.state.walkerList} /> : null}

                    <div className="walkers__buttons">
                        <button onClick={this.showForm}>Seja um passeador</button>
                        <button onClick={this.getWalkers}>Conheça alguns de nossos passeadores</button>
                    </div>
                </header>
                <Footer />
            </section>
        )
    }
}

export default Walkers;