import React from 'react';

const List = ({clientList}) => (
    <section className="repocard__section">
        <h2>{clientList.name}</h2>
        <p>{clientList.phone}</p>
        <p>{clientList.cpf}</p>
        <p>{clientList.email}</p>
        <p>{clientList.address}</p>
        
    </section>
)

export default List;