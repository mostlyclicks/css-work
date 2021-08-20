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
  min-width:190px;
  text-align:left;
  margin:0;
  padding:0;
  li::marker {
    content:"➜";
    color:#ebebeb;
  }
  
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
