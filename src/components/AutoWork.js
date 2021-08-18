import React from 'react'
import styled from 'styled-components'

const AutoWork = () => {
  return (
    <Div>
      <div>
        <h1>Using Margin Auto</h1>
        <p>You can use margin-left:auto or margin-right:auto to center 2 divs.</p>
      </div>
      <Section>
      <TextBlocks>
        <h1>Section 1</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident atque, dignissimos dolorum doloribus voluptatibus enim perspiciatis repudiandae quos iusto quas optio non fugiat! Quibusdam voluptatem laboriosam in? Totam, ipsam explicabo!</p>
      </TextBlocks>
      <TextBlocks>
        <h1>Section 2</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident atque, dignissimos dolorum doloribus voluptatibus enim perspiciatis repudiandae quos iusto quas optio non fugiat! Quibusdam voluptatem laboriosam in? Totam, ipsam explicabo!</p>
      </TextBlocks>
      </Section>
      
    </Div>
  )
}

export default AutoWork


const Div = styled.div`
  div {
    display:flex;
    flex-direction:column;
  }
`

const Section = styled.section`
  display:flex;
`

const TextBlocks = styled.div`
  width:200px;
  text-align:left;
  margin:1rem;
    &:nth-child(1) {
     margin-left:auto;
    }
    &:nth-child(2) {
      margin-right:auto;
    }
`


