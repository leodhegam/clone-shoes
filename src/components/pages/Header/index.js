import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdShoppingCart, MdPermIdentity, MdFavorite } from 'react-icons/md';
import { Container, Cart } from './styles';
import logo from '../imgs/logo.png';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <h4>CLONESHOES</h4>
      </Link>
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
}))(Header);
