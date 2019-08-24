import React from 'react';
import '../../styles/style.css';


//Importação do componente de cada cliente
import ListC from './ListC';

const ListClients = ({clientList}) => (
    <section className="listclients__section">
        {clientList.map(list => (
            <ListC clientList={list}
            />
        ))}  
    </section>
)

export default ListClients;