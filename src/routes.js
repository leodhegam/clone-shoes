import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Masculino from './components/pages/Masculino';
import Home from './components/pages/Home';
import Feminino from './components/pages/Feminino';
import Cart from './components/pages/Cart';
import Contato from './components/pages/Contato';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/masculino" component={Masculino} />
      <Route path="/feminino" component={Feminino} />
      <Route path="/cart" component={Cart} />
      <Route path="/contato" component={Contato} />
    </Switch>
  );
}
