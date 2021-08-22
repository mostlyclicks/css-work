import React from 'react'
import styled from 'styled-components'

const Buttons = (props) => {
  return (
    <Button>hello</Button>
  )
}

export default Buttons

const Button = styled.div`
  width:auto;
  background-color:#d9d9d9;
  color:#141414;
  padding:1.25rem 2rem;
  border-radius:10px;
  &:hover {
    background-color:#252525;
    color:#ffffff;
    transition:500ms;
    // transform:translate(5px, 10px);
    transform:scale(0.98, 0.98);
  }
`
