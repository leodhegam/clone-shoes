import React from 'react';

import { bindActionCreators } from 'redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { connect } from 'react-redux';
import { Container, ProductTable, Total } from './styles';
import { formatPrice } from '../../../util/format';
import * as CartActions from '../../../store/modules/cart/actions';

function Cart({ cart, removeCart, update, total }) {
  function increment(product) {
    update(product.id, product.amount + 1);
  }
  function decrement(product) {
    update(product.id, product.amount - 1);
  }
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            return (
              <tr>
                <th>1</th>
                <td>
                  <img
                    src={product.image}
                    width="100px"
                    height="100px"
                    alt={product.title}
                  />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span> {formatPrice(product.price)}</span>
                </td>
                <td>
                  <div>
                    <button type="button" onClick={() => decrement(product)}>
                      <MdRemoveCircleOutline size={20} />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button" onClick={() => increment(product)}>
                      <MdAddCircleOutline size={20} />
                    </button>
                  </div>
                </td>

                <td>
                  <span>{product.subtotal}</span>
                </td>
                <button type="button" onClick={() => removeCart(product.id)}>
                  <MdDelete size={20} color="#FFF" />
                </button>
              </tr>
            );
          })}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">FINALIZAR PEDIDO</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
