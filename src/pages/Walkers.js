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
        }
    }

    getWalkers = () => {
        axios.get(`http://localhost:8080/api/walkers`)
        .then((res) => {
            console.log(res.data)
            this.setState({walkerList: res.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    setWalker = () => {
        this.setState({walkersRegister: !this.state.walkersRegister});
        axios.post(`http://localhost:8080/api/walkers`, {
            name: '',
            phone: '',
            cpf: '',
            email: '',
            address: ''   
        })
        .then((res) => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        return(
            <section>
                <header className="walkers__section">
                    <Nav />
                    {this.state.walkersRegister ? <WalkersRegister /> : null || this.state.listWalkers ? <ListWalkers /> : null}
                    <ListWalkers walkerList={this.state.walkerList}
                    />
                    <div className="clients__buttons">
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