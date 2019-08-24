import React from 'react';
import '../../styles/style.css';


//Importação do componente de cada cliente
import List from './List';

const ListClients = ({clientList}) => (
    <section className="listclients__section">
        {clientList.map(list => (
            <List clientList={list}
            />
        ))}  
        {console.log(clientList)}      
    </section>
)

export default ListClients;