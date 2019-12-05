import React from 'react';
import {Link} from 'react-router-dom';
 import { Container } from './styles';
 import { connect} from 'react-redux';
 import logo from '../imgs/logo.png'
 import {MdShoppingCart,MdPermIdentity,MdFavorite} from "react-icons/md"
function NavBar({cartSize}) {
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
          <Link to="/masculino"className="text-light p-2"> Masculino</Link>
          </li>
          <li class="nav-item">
          <Link to="/feminino"className="text-light p-2"> Feminino</Link>
          </li>
          <li class="nav-item">
            <Link to="/contato"className="text-light p-2"> Contato</Link>
          </li>
        </ul>
      </div>
      <Link to="/card" className="text-light p-2">
      <MdShoppingCart/>
      <span className="p-2">{cartSize} itens</span>
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
export default connect(state => ({
  cartSize: state.cart.length,
  }))(NavBar);