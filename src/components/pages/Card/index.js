import React from 'react';
import { Container } from '../NavBar/styles';
import cris from '../imgs/cris.jpg'
// import { Container } from './styles';

export default function Card() {
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
    <tr>
      <th scope="row">1</th>
      <td>
          <img src={cris} width="100px" height="100px" alt="camisa"/>
      </td>
      <td>1</td>
      <td>R$ 249,90</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
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
