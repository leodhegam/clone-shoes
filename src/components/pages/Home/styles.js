import styled from 'styled-components';

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns:repeat(3,1fr);

  }
  li {
    display: flex;
    flex-direction:column;
    background: #FFF;
    border-radius:3px;
    padding: 20px;
  }
  img{
    align-self:center;
    max-width:250px;
  }
  > strong {
    font-size:16px;
    line-height:20px;
    margin-top:5px;
  }
  
`;
