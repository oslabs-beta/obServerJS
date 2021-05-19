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

const ResponseObject = () => {
  const { 
    state: { 
      currentRoute: { 
        activeMiddleware: { response }
       }
    } 
  } = useContext(MainContainerContext)


  return (
    <Container style={styles.container}>
      <h1>Response</h1>
      {Object.entries(response).map(([key, value]) => (
        <p>
          {`${key}: ${value}`}
        </p>
      ))}
    </Container>
  )
}

export default ResponseObject
