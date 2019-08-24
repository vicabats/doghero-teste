import React from 'react';
import '../../styles/style.css';

const ListW = ({walkerList}) => (
    <section className="list__section">
        <h2><a>{walkerList.name}</a></h2>
        <p>Celular: {walkerList.phone}</p>
        <p>CPF: {walkerList.cpf}</p>
        <p>Email: {walkerList.email}</p>
        <p>Endereço: {walkerList.address}</p>
    </section>
)

export default ListW;