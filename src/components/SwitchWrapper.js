import React from 'react'
import styled from 'styled-components'

const SwitchWrapper = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export default SwitchWrapper

const Wrapper = styled.div`
  flex:1 auto;
  margin-left:2rem;
  
`
