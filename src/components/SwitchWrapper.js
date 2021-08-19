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
  outline:1px solid red;
  flex:1 auto;
`
