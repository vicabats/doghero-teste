import React from 'react';
import '../../styles/style.css';
import axios from 'axios';

class ClientRegister extends React.Component {
    constructor(){
        super();

        this.state={
            name: '',
            cpf: '',
            address: '',
            email: '',
            phone: ''
        }
        this.setClient = this.setClient.bind(this);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    setClient = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/api/clients`, this.state)
        .then((res) => {
            alert(`O cliente ${this.state.name} foi adicionado ao banco de dados!`)
        })
        .catch(error => {
            alert("Não foi possível cadastrar o cliente. Tente novamente.")
        })
    }

      render() {
        const {name, cpf, address, email, phone} = this.state;
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
                    <label htmlFor="phone">Celular:</label>
                    <input value={phone} name="phone" type="number" placeholder="11 999842398" required autoFocus onChange={this.onChange}>{this.props.phone}</input>
                    <input className="submit-button" type="submit" name="enviar" value="enviar" onClick={this.setClient}></input>
                </form>
            </div>
        </section>
        );
      }
}

export default ClientRegister;