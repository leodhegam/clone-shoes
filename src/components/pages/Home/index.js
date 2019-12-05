import React, {Component} from 'react';
import {ProductList} from './styles'
import { connect }  from 'react-redux';
import api from '../../../services/api';
import {formatPrice} from '../../../util/format'
import {MdShoppingCart} from 'react-icons/md'
import style from './styles'
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
  const { dispatch } = this.props;
  dispatch ({
    type:'ADD_CART',
    product,
  });
};
  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product =>(
              <li className="border m-2"key={product.id}>
      <img src={product.image} alt={product.title} />
      <strong>{product.title}</strong>
      <span className="p-2 m-1">{formatPrice(product.price)}</span>
      <button type="button" class="btn btn-outline-success p-2 " onClick={ () => this.handleAdd(product)}>ADICIONAR AO CARRINHO
      <div><MdShoppingCart size={16}/></div>
      </button>
        
         
        </li>
        ))}
        </ProductList>
        
  ); 
}

}

    
export default connect ()(Home);