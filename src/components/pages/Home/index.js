import React, {Component} from 'react';
import {ProductList} from './styles'
import { connect }  from 'react-redux';
import Body from '../../../server.json'
import api from '../../../services/api';
import {formatPrice} from '../../../util/format'
import  * as CartActions from '../../../store/modules/cart/actions'
import {bindActionCreators} from 'redux';
import {MdShoppingCart} from 'react-icons/md'

 class Home extends Component  {
  state = {
    products:[],
  };
  async componentDidMount(){
    const response = await api.get('products');
    this.setState({products:response.data}); 
    const data = response.data.map(product=>({
      ...product, priceFormatted : formatPrice(product.price),
    }));
  }
handleAdd = product => {
  const { addCart } = this.props;
  addCart(product);
};
  render() {
    const {amount}= this.props;
    const { products } = this.state;

    return (
      <ProductList>
        {Body.map(product =>(
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