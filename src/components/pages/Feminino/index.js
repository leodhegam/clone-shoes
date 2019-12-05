import React, {Component} from 'react';
import apifem from '../../../services/apifem'
import {ProductList} from '../Home/styles'
import api from '../../../services/api';
import {formatPrice} from '../../../util/format'
import {MdShoppingCart} from 'react-icons/md'
// import { Container } from './styles';

export default class Home extends Component  {
    state = {
      products:[],
    };
    async componentDidMount(){
      const response = await apifem.get('products');
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
        <span className="p-2 m-1">{formatPrice(product.price)}</span>
        <button type="button" class="btn btn-outline-success p-2 ">ADICIONAR AO CARRINHO
        <div><MdShoppingCart size={16}/></div>
        </button>
          
           
          </li>
          ))}
          </ProductList>
          
    ); 
  }
  
  }
