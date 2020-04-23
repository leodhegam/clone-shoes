import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  a {
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
    }
  }
  h4 {
    color: #fff;
  }
  img {
    height: 34px;
    width: 34px;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;
  }
  strong {
    display: block;
    color: #fff;
  }
  span {
    font-size: 12px;
    color: #999;
  }
`;