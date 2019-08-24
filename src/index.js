import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Importando páginas
import Homepage from './pages/Homepage';
import Clients from './pages/Clients';
import Walkers from './pages/Walkers';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/clients' component={Clients} />
            {/* <Route path='/dogs' component={Dogs} /> */}
            <Route path='/walkers' component={Walkers} />
        </Switch>
    </BrowserRouter>

, document.getElementById('root'));