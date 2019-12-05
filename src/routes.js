import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Masculino from './components/pages/Masculino';
import Home from './components/pages/Home'
import Feminino from './components/pages/Feminino';
import Card from './components/pages/Card';
import Contato from './components/pages/Contato';

export default function Routes (){
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/masculino" exact component={Masculino}/>
            <Route path="/feminino" exact component={Feminino}/>
            <Route path="/card" exact component={Card}/>
            <Route path="/contato" exact component={Contato}/>
        </Switch>
    )
}