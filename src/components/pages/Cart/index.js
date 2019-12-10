import React from 'react';
import { Container } from '../NavBar/styles';

import {bindActionCreators} from 'redux';
import {MdRemoveCircleOutline ,MdAddCircleOutline,MdDelete } from 'react-icons/md'
import { connect } from 'react-redux';
import { formatPrice } from '../../../util/format';
import * as CartActions from '../../../store/modules/cart/actions'


 function Cart({cart,removeCart,update,total}) {
   function increment (product){
 update(product.id,product.amount + 1)
   }
   function decrement (product){
     update(product.id,product.amount - 1 )
  }
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
         <button className="btn btn-secondary m-1 p-2" type="button" onClick={()=> decrement(product)}>
           <MdRemoveCircleOutline size={20}/>
         </button>
         <input type="number" readOnly value={product.amount}/>
         <button className="btn btn-secondary m-1 p-2"type="button"onClick={()=> increment(product)}>
           <MdAddCircleOutline size={20}/>
         </button>
         </td>

         <td>
           <span>{product.subtotal}</span>
           </td>
           <button className="btn btn-secondary m-1 p-2 mt-2"type="button" onClick={()=> removeCart(product.id)}>
             <MdDelete size={20} color ="#FFF"/>
           </button>
     </tr> 
      ))}
   
  </tbody>
</table>
<footer className="text-right p-4">
<button type="button" class="btn btn-outline-success">FINALIZAR PEDIDO</button>
<div>
    <span className="p-2">TOTAL</span>
    <strong>{total}</strong>
</div>
</footer>
</Container>
  );
}
const mapStateToProps = state => ({
  cart: state.cart.map(product =>({
    ...product , subtotal: formatPrice(product.price * product.amount),
  }
  )),
  total : formatPrice(
    state.cart.reduce((total,product)=>{
      return total + product.price * product.amount
    },0),
    ) ,
    
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect (mapStateToProps,mapDispatchToProps)(Cart);
