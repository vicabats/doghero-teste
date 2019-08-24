import React from 'react';
import '../../styles/style.css';

const List = ({clientList}) => (
    <section className="list__section">
        <h2><a>{clientList.name}</a></h2>
        <p>Celular: {clientList.phone}</p>
        <p>CPF: {clientList.cpf}</p>
        <p>Email: {clientList.email}</p>
        <p>Endereço: {clientList.address}</p>
    </section>
)

export default List;