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
            walkersRegister: false,
            walkerList: [],
            showList: false,
        }
    }

    getWalkers = () => {
        this.setState({showList: true, walkersRegister: false})
        axios.get(`http://localhost:8080/api/walkers`)
        .then((res) => {
            this.setState({walkerList: res.data})
        })
        .catch(error => {
            alert("Não foi possível encontrar os passeadores cadastrados na plataforma!")
        })
    }

    setWalker = () => {
        this.setState({walkersRegister: true, showList: false});
        axios.post(`http://localhost:8080/api/walkers`, {
            name: '',
            phone: '',
            cpf: '',
            email: '',
            address: ''   
        })
        .then((res) => {
            alert("Passeador cadastrado com sucesso!")
        })
        .catch(error => {
            alert("Não foi possível efetuar o cadastro. Tente novamente.")
        })
    }

    render(){
        return(
            <section>
                <header className="walkers__section">
                    <Nav />
                    {this.state.walkersRegister ? <WalkersRegister /> : null}

                    {this.state.showList ? <ListWalkers walkerList={this.state.walkerList} /> : null}

                    <div className="walkers__buttons">
                        <button onClick={this.setWalker}>Seja um passeador</button>
                        <button onClick={this.getWalkers}>Conheça alguns de nossos passeadores</button>
                    </div>
                </header>
                <Footer />
            </section>
        )
    }
}

export default Walkers;