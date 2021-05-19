import React from 'react'
import {
  Container,
} from '@material-ui/core'
import MiddlewareContainer from './Middleware/MiddlewareContainer'
import ResponseObject from './ResponseObject'
import Variables from './Variables'

const styles = {
  mainContainer: {
    background: '#292c30',
    gridArea: 'windows',
    display: 'flex', 
    flexDirection: 'row',
    justfyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    border: '1px solid white'
  },
  infoContainer: {
    display: 'flex', 
    width: '100%',
    flexDirection: 'column',
    padding: 0,
    margin: 0,
  }, 
}

const ResponseContainer = () => {
  return (
    <Container style={styles.mainContainer}>
      <MiddlewareContainer />

      <Container style={styles.infoContainer}>
        <ResponseObject />
        <Variables />
      </Container>
    </Container>
  )
}

export default ResponseContainer
