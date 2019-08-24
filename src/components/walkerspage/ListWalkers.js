import React from 'react';
import '../../styles/style.css';

//Importação do componente de cada cliente
import ListW from './ListW';

const ListWalkers = ({walkerList}) => (
    <section className="listwalkers__section">
        {walkerList.map(list => (
            <ListW walkerList={list}
            />
        ))}  
    </section>
)

export default ListWalkers;