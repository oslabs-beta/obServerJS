import React, { useContext } from 'react'
import { MainContainerContext } from '../../../Global/context/MainContainerContext'
import {
  Container,
} from '@material-ui/core'
import MiddlewareChain from './MiddlewareChain'
import FunctionContainer from './FunctionContainer'

const styles = {
  container: {
    display: 'flex',
    margin: 0,
    padding: 0,
    height: '90%',
    background: '#1e2125',
    borderRadius: 12,
    width: '200%',
  },
}

const MiddlewareFunc = () => {
  const { state: { currentRoute: { middleware, activeMiddleware } }, dispatch } = useContext(MainContainerContext)

  return (
    <Container style={styles.container}>
      <MiddlewareChain middleware={middleware} dispatch={dispatch} />
      <FunctionContainer activeMiddleware={activeMiddleware} />
    </Container>
  )
}

export default MiddlewareFunc
