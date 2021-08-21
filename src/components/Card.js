import React from 'react'
import styled from 'styled-components'
import logo from '../logo.svg'

const Card = () => {
  return (
    <Div>
      <img src={logo} />
      <div>
        <h3>Carlos Interone</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sunt fugiat quo porro quasi, libero quod perferendis id doloremque quam adipisci.</p>
      </div>
      
    </Div>
  )
}

export default Card


const Div = styled.div`

  border-radius:10px;
  width:100%;
  height:auto;
  padding:1rem;
  display:flex;
  align-items:center;
  box-shadow: 0 4px 12px rgba(0,0,0,.1);
  margin:0 auto;

  div {
    flex-grow:3;
    text-align:left;
    h3 {
      line-height:1.1rem;
      margin:0;
    }
    p {
      
      line-height:1.5;
    }
  }

  img {
    width:120px;
    flex-grow:1;
  }

  @media (min-width:768px) {
    width:500px;
  }
`
