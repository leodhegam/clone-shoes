import React from 'react';
import { Container } from '../NavBar/styles';
import cris from '../imgs/cris.jpg'
import {MdRemoveCircleOutline ,MdAddCircleOutline } from 'react-icons/md'
import { connect } from 'react-redux';
import { formatPrice } from '../../../util/format';

// import { Container } from './styles';

 function Cart({cart}) {
  return (
<Container>
<table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">PRODUTO</th>
      <th scope="col">QTD</th>
      <th scope="col">SUBTOTAL</th>
    </tr>
  </thead>
  <tbody>
    {cart.map(product =>(
       <tr>
       <th scope="row">1</th>
       <td>
           <img src={product.image} width="100px" height="100px" alt={product.title}/>
       </td>
       <td>
       <strong className="p-3">{product.title}</strong>
           <span className="text-center"> {formatPrice(product.price)}</span>
       </td>
       <td>
         <button type="button">
           <MdRemoveCircleOutline size={20}/>
         </button>
         <input type="number" readOnly value={product.amount}/>
         <button type="button">
           <MdAddCircleOutline size={20}/>
         </button>
         </td>

         <td>
           <span>{product.subtotal}</span>
           </td>
     </tr> 
      ))}
   
  </tbody>
</table>
<footer className="text-right p-4">
<button type="button" class="btn btn-outline-success">FINALIZAR PEDIDO</button>
<div>
    <span className="p-2">TOTAL</span>
    <strong>R$ 1.754,45</strong>
</div>
</footer>
</Container>
  );
}
const mapStateToProps = state => ({
  cart: state.cart.map(product =>({
    ...product , subtotal: formatPrice(product.price * product.amount),
  }
  ))
});
export default connect (mapStateToProps)(Cart);
