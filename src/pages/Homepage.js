import React from 'react';

//Importando componentes
import Header from '../components/Header';
import Select from '../components/Select';
import Footer from '../components/Footer';

class Homepage extends React.Component {
    constructor(){
        super()

        this.state={

        }
    }

    render(){
        return (
            <section className="homepage-section">
                <div>
                    <Header />
                    <Select />
                </div>
                <Footer />
            </section>
        )
    }
}

export default Homepage;