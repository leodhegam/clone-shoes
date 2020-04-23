import React, {Component} from 'react';
import { connect }  from 'react-redux';
import products from '../../../server.json'
import {formatPrice} from '../../../util/format'
import  * as CartActions from '../../../store/modules/cart/actions'
import {bindActionCreators} from 'redux';
import {MdShoppingCart} from 'react-icons/md'

import {ProductList} from './styles'

class Home extends Component  {
  state = {
    products:[],
  };
 
handleAdd = product => {
 
  const { addCart } = this.props;
  addCart(product);
};
  render() {
  
    const {amount}= this.props;
  

    return (
      <ProductList>
        {products.map(product =>(
              <li key={product.id}>
      <img src={product.image} alt={product.title} />
      <strong>{product.title}</strong>
      <span>{formatPrice(product.price)}</span>
      <button size={16} color="#FFF" type="button" onClick={ () => this.handleAdd(product)}>
        <div>
          <MdShoppingCart size={16}/>
          {amount[product.id] || 0}
          </div>
          <span>ADICIONAR AO CARRINHO</span>
      </button>
        
         
        </li>
        ))}
        </ProductList>
        
  ); 
}

}
const mapStateToProps = state => ({
  amount : state.cart.reduce((amount,product)=>{
    amount[product.id] = product.amount;
    return amount;
  }, {} ),
});
   const mapDispatchToProps = dispatch =>
     bindActionCreators(CartActions, dispatch); 
export default connect (mapStateToProps,mapDispatchToProps)(Home);