import React from 'react'
import styled from 'styled-components'

const FlexWork = () => {
  return (
    <FlexDiv>
      <div>hello 1</div>
      <div>hello 2</div>
      <div>hello 3</div>
      <div>hello 4</div>
    </FlexDiv>
  )
}

export default FlexWork

const FlexDiv = styled.div`
  margin-top:4rem;
  display:flex;
  //flex-direction:column;
  height:auto;
  gap:1rem;

  justify-content:space-between;
  justify-content:space-around;
  justify-content:flex-end;
  justify-content:flex-start;
  // flex-direction:row-reverse;

  align-items:center;
  //align-items:flex-end;

  flex-wrap:wrap;
  
  outline:1px solid red;

  div {
    display:flex;
    align-items:center;
    justify-content:center;
    outline: 1px solid blue;
    width:75px;
    height:75px;

     &:nth-child(1) {
      flex-basis:25%;
      
    }

    &:nth-child(2) {
      //flex-basis:25%;
      flex-grow:1;
    }

    &:nth-child(4) {
      outline:1px solid red;

      //flex grow takes up rest of empty space
      //flex-grow:1;

      // takes up 50% of the content. Will wrap if over.
      flex-basis:50%;
      
      @media (max-width:768px) {
        flex-basis:100%;
      }
    }
  }
  
`