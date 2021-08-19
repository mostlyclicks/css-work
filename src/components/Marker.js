import React from 'react'
import styled from 'styled-components'

const Marker = () => {
  return (
    <div>
      <Ul>
        <li>Think 1</li>
        <li>Think 2</li>
        <li>Think 3</li>
        <li>Think 4</li>
        <li>Think 5</li>
      </Ul>

      
    </div>
  )
}

export default Marker


const Ul = styled.ul`


li::marker {
  content: '→ ';
  //https://unicode-table.com/en/
  color:blue;
}

`
