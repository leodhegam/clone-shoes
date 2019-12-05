import React from 'react';
import {Link} from 'react-router-dom';
 import { Container } from './styles';
 import logo from '../imgs/logo.png'
 import {MdShoppingCart,MdPermIdentity,MdFavorite} from "react-icons/md"
export default function NavBar() {
  return (
    <Container>
   <h4 className="text-center">CLONESHOES</h4>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div class="container">
      <Link to="/">
      <img src={logo} width="60px"href="#"></img>
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Masculino</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Feminino</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contato</a>
          </li>
        </ul>
      </div>
      <Link to="/card" className="text-light p-2">
      <MdShoppingCart/>
      <span className="p-2">3 itens</span>
      </Link>  
     <Link className="text-light p-1">
     <MdPermIdentity/>
     </Link>
     <Link className="text-light p-1">
     <MdFavorite/>
     </Link>
    </div>
  </nav>

    </Container>
  );
}
