import React from 'react'

import styled from 'styled-components';
import {Button} from './Button';


const StyledButton = styled(Button)`
  font-size: 30px;
`

const StyledButton2 = styled(StyledButton)`
  color: red
`

const StyledButton3 = styled(StyledButton2)`
  color: red
`

export default function Hello() {
  return <div>
    <Button ttt={'Button'}/>
    <StyledButton ttt={'StyledButton'}/>
    <StyledButton2 ttt={'StyledButton2'}/>
    <StyledButton3 ttt={'StyledButton3'}/>
  </div>
}
