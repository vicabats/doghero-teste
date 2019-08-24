import React from 'react';
import '../../styles/style.css';

class ClientRegister extends React.Component {
    constructor(){
        super();

        this.state={
            name: '',
            cpf: '',
            address: '',
            email: '',
            cellphone: '',
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        alert(`O cliente ${this.state.name} foi adicionado ao banco de dados!`)
    }

      render() {
          const {name, cpf, address, email, cellphone} = this.state;
        return (
        <section className="clientregister__section">
            <div>
                <form>
                    <label for="name">Nome:</label>
                    <input value={name} name="name" type="text" placeholder="Seu nome aqui" required autoFocus onChange={this.onChange}>{this.props.name}</input>
                    <label for="cpf">CPF:</label>
                    <input value={cpf} name="cpf" type="number" placeholder="000.111.222-33" required autoFocus onChange={this.onChange}>{this.props.cpf}</input>
                    <label for="address">Endereço:</label>
                    <input value={address} name="address" type="text" placeholder="Av. Paulista, 1.000, apto 24" required autoFocus onChange={this.onChange}>{this.props.address}</input>
                    <label for="email">Email:</label>
                    <input value={email} name="email" type="email" placeholder="seunome@email.com" required autoFocus onChange={this.onChange}>{this.props.email}</input>
                    <label for="cellphone">Celular:</label>
                    <input value={cellphone} name="cellphone" type="number" placeholder="11 999842398" required autoFocus onChange={this.onChange}>{this.props.cellphone}</input>
                    <input className="submit-button" type="submit" value="Enviar" onClick={e => this.handleSubmit}></input>
                </form>
            </div>
        </section>
        );
      }
}

export default ClientRegister;