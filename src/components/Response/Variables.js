import React, { useContext } from 'react'
import {
  Box,
  Container,
} from '@material-ui/core'
import { MainContainerContext } from '../../Global/context/MainContainerContext'

const styles = {
  container: {
    height: '50%',
    background: '#1e2125',
    borderRadius: 12,
  }
}

const Variables = () => {
  const { 
    state: { 
      currentRoute: { activeMiddleware }
    } 
  } = useContext(MainContainerContext)
  console.log(activeMiddleware)
  return (
    <Container style={styles.container}>
      <h1>Variables</h1>
      {activeMiddleware.variables.map((variableObj) => {
        return Object.keys(variableObj).map((variable) => (
          <p>{`${variable}: ${variableObj[variable]}`}</p>
        ))
      })}
    </Container>
  )
}

export default Variables
