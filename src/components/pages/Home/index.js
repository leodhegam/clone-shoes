import React, {Component} from 'react';
import {ProductList} from './styles'
import api from '../../../services/api';
import {MdShoppingCart} from 'react-icons/md'
import style from './styles'
export default class Home extends Component  {
  state = {
    products:[],
  };
  async componentDidMount(){
    const response = await api.get('products');
    this.setState({products:response.data});
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product =>(
              <li className="border m-2"key={product.id}>
      <img src={product.image} alt={product.title} />
      <strong>{product.title}</strong>
      <span>R${product.price}</span>
      <button type="button" class="btn btn-outline-success p-2 ">ADICIONAR AO CARRINHO
      <div><MdShoppingCart size={16}/></div>
      </button>
        
         
        </li>
        ))}
        </ProductList>
        
  ); 
}

}

    