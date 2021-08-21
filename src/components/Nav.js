import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
  return (
    <NavWrapper>
    <Ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/column-div">Column Div</Link></li>
      <li><Link to="/flex-work">Flex Work</Link></li>
      <li><Link to="/auto-work">Auto Work</Link></li>
      <li><Link to="/marker">Marker</Link></li>
      <li><Link to="/card">Card</Link></li>
    </Ul>
    </NavWrapper>
  )
}

export default Nav

const NavWrapper = styled.div`
  position:fixed;
  background-color:#e8e8e8;
  height:100vh;
  top:0;
  left:0;
  width:120px;

`

const Ul = styled.ul`
  
  min-width:120px;
  text-align:left;
  margin:0;
  padding:0;
  margin-left:.4em;
  
  // li::marker {
  //   content:"➜";
  //   color:#ffffff;
  // }
  
  li a {
    display:block;
    padding:.5rem .5rem;
    text-decoration:none;
    &:hover {
      background-color:#d2d2d2;
      transition:300ms;
    }
  }
`
