import React, { useContext } from 'react'
import MiddlewareFn from './MiddlewareFn'
import {
  Container,
} from '@material-ui/core';

const MiddlewareFnContainer = () => {
  return (
    // Map the entire list of middleware functions
    <MiddlewareFn></MiddlewareFn>
  )
}

export default MiddlewareFnContainer;