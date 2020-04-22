import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdShoppingCart, MdPermIdentity, MdFavorite } from 'react-icons/md';
import { Container, Cart } from './styles';
import logo from '../imgs/logo.png';

function NavBar({ cartSize }) {
  return (
    <Container>
      <h4 className="text-center">CLONESHOES</h4>
      <Link to="/">
        <img src={logo} alt="CloneShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingCart size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
export default connect((state) => ({
  cartSize: state.cart.length,
}))(NavBar);
