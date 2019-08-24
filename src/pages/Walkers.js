import React from 'react';
import '../styles/style.css';

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
            listWalkers: false,
        }
    }

    showWalkersRegister = () => {
        this.setState({walkersRegister: !this.state.walkersRegister})
    }

    showListWalkers = () => {
        this.setState({listWalkers: !this.state.listWalkers})
    }

    render(){
        return(
            <section>
                <header className="walkers__section">
                    <Nav />
                    {this.state.walkersRegister ? <WalkersRegister /> : null || this.state.listWalkers ? <ListWalkers /> : null}
                    <div className="clients__buttons">
                        <button onClick={this.showWalkersRegister}>Seja um passeador</button>
                        <button onClick={this.showListWalkers}>Conheça alguns de nossos passeadores</button>
                    </div>
                </header>
                <Footer />
            </section>
        )
    }
}

export default Walkers;