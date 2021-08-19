import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
  return (
    
      <Ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/column-div">Column Div</Link></li>
        <li><Link to="/flex-work">Flex Work</Link></li>
        <li><Link to="/auto-work">Auto Work</Link></li>
        <li><Link to="/marker">Marker</Link></li>
      </Ul>
    
  )
}

export default Nav

const Ul = styled.ul`
  flex-basis:17%;
`
