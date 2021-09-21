import React from 'react'

import styled from 'styled-components';
import './hello.css';

const Container = styled('div')`
  border: 1px solid red;
  padding: 10px;

  .my-button {
    font-size: 50px;
  }
`

export default function Hello() {
  return <Container>
    <button className='my-button'>Hello</button>
  </Container>
}
