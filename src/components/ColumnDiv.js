import React from 'react'
import styled from 'styled-components'

const ColumnDiv = () => {
  return (
    <WrapperDiv>
      <h1>This is columns</h1>
      <Columns>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas in, excepturi fugit, blanditiis ducimus nostrum sequi molestiae explicabo, atque adipisci. Voluptas vel cupiditate ipsum. Eos illo quam earum provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia dolores est. Modi labore reprehenderit molestiae aliquid officiis necessitatibus explicabo voluptate. Rerum quas fugiat molestiae sapiente debitis optio autem dolore!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sapiente explicabo molestiae deleniti, recusandae, minima, molestias cupiditate repellendus magni minus accusamus modi. Deleniti, officia magni voluptas fugiat sint id quam?</p>

      </Columns>
    </WrapperDiv>
  )
}

export default ColumnDiv

const WrapperDiv = styled.div`
  padding:2rem;
`

const Columns = styled.div`
  columns:3 200px;
  column-gap:3rem;
  text-align:left;
  column-rule:1px solid #cdcdcd;
  p {
    margin-top:0;
  }
`
