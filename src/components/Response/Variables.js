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
    border: '1px solid white',
    padding: 0,
    margin: 0,
  }
}

const Variables = () => {
  const { 
    state: { 
      currentRoute: { activeMiddleware }
    } 
  } = useContext(MainContainerContext)

  console.log((Object.values(activeMiddleware.variables)).length )

  return (
    <Container style={styles.container}>
      <h1>Variables</h1>
      {Object.keys(activeMiddleware.variables).length 
      ? activeMiddleware.variables.map((variableObj) => {
        return Object.keys(variableObj).map((variable) => (
          <p>{`${variable}: ${variableObj[variable]}`}</p>
        ))
      }): 'No variables available'}
    </Container>
  )
}

export default Variables
