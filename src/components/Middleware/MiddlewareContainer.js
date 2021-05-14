import React, { useContext } from 'react'
import MiddlewareFnContainer from './MiddlewareFnContainer/MiddlewareFnContainer'
import SourceCodeContainer from './SourceCode/SourceCode'
import {
  Container,
} from '@material-ui/core';

const MiddlewareContainer = () => {

  return (
    <div>
      <MiddlewareFnContainer></MiddlewareFnContainer>
      <SourceCodeContainer></SourceCodeContainer>
    </div>
  )
}

export default MiddlewareContainer;