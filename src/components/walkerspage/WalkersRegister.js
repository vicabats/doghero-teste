import React from 'react';
import '../../styles/style.css';
import axios from 'axios';


class WalkersRegister extends React.Component {
    constructor() {
        super()

        this.state = {
            name: '',
            cpf: '',
            address: '',
            email: '',
            phone: ''
        }
        this.setWalker = this.setWalker.bind(this);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    setWalker(e) {
        console.log("chamando setwalker")
        e.preventDefault();
        axios.post(`http://localhost:8080/api/walkers`, {
            name: '',
            phone: '',
            cpf: '',
            email: '',
            address: ''   
        })
        .then((res) => {
            alert(`O passeador ${this.state.name} foi adicionado ao banco de dados!`)
            console.log(res)
        })
        .catch(error => {
            alert("Não foi possível cadastrar o passeador. Tente novamente.")
        })
    }

    render() {
        const { name, cpf, address, email, cellphone } = this.state;
        return (
            <section className="clientregister__section">
                <div>
                    <form>
                        <label htmlFor="name">Nome:</label>
                        <input value={name} name="name" type="text" placeholder="Seu nome aqui" required autoFocus onChange={this.onChange}>{this.props.name}</input>
                        <label htmlFor="cpf">CPF:</label>
                        <input value={cpf} name="cpf" type="number" placeholder="000.111.222-33" required autoFocus onChange={this.onChange}>{this.props.cpf}</input>
                        <label htmlFor="address">Endereço:</label>
                        <input value={address} name="address" type="text" placeholder="Av. Paulista, 1.000, apto 24" required autoFocus onChange={this.onChange}>{this.props.address}</input>
                        <label htmlFor="email">Email:</label>
                        <input value={email} name="email" type="email" placeholder="seunome@email.com" required autoFocus onChange={this.onChange}>{this.props.email}</input>
                        <label htmlFor="cellphone">Celular:</label>
                        <input value={cellphone} name="cellphone" type="number" placeholder="11 999842398" required autoFocus onChange={this.onChange}>{this.props.cellphone}</input>
                        <input className="submit-button" type="submit" value="Enviar" onClick={e => this.setWalker}></input>
                    </form>
                </div>
            </section>
        )
    }
}
export default WalkersRegister;