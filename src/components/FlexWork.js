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
  height:150px;

  justify-content:space-between;
  justify-content:space-around;
  justify-content:flex-end;
  justify-content:flex-start;
  // flex-direction:row-reverse;

  align-items:center;
  align-items:flex-end;

  
  outline:1px solid red;
  div {
    outline: 1px solid blue;
    width:75px;
    height:75px;
  }
  div:nth-child(4) {
    outline:1px solid red;
    //flex grow takes up rest of empty space
    flex-grow:1;

  }
`