import React from 'react';
import '../../styles/style.css';

function WalkersRegister() {
    return (
        <section className="walkersregister__section">
            <div>
                <form>
                    <label for="name">Nome:</label>
                    <input name="name" type="text" placeholder="Seu nome aqui" required autoFocus></input>
                    <label for="cpf">CPF:</label>
                    <input name="cpf" type="number" placeholder="000.111.222-33" required autoFocus></input>
                    <label for="address">Endereço:</label>
                    <input name="address" type="text" placeholder="Av. Paulista, 1.000, apto 24" required autoFocus></input>
                    <label for="email">Email:</label>
                    <input name="email" type="email" placeholder="seunome@email.com" required autoFocus></input>
                    <label for="cellphone">Celular:</label>
                    <input name="cellphone" type="number" placeholder="11 999842398" required autoFocus></input>
                    <input className="submit-button" type="submit" value="Enviar"></input>
                </form>
            </div>
        </section>
    )
}

export default WalkersRegister;