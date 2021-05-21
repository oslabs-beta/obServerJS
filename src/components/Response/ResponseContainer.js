import React from 'react'
import {
  Container,
} from '@material-ui/core'
import MiddlewareContainer from './Middleware/MiddlewareContainer'
import ValuesContainer from './Values/ValuesContainer'

const styles = {
  mainContainer: {
    background: '#292c30',
    gridArea: 'windows',
    display: 'flex', 
    flexDirection: 'row',
    justfyContent: 'center',
    alignItems: 'center',
    padding: '0 2rem 0 .5rem',
    margin: 0,
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

      <ValuesContainer />
    </Container>
  )
}

export default ResponseContainer
