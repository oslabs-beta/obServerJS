import React from 'react'
import { Container } from '@material-ui/core'
import ResponseObject from './ResponseObject'
import Variables from './Variables'

const styles = {
  infoContainer: {
    display: 'flex', 
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'space-between',
    padding: 0,
    margin: 0,
  }, 
}

const ValuesContainer = ({ populated }) => {
  return (
    <Container style={styles.infoContainer}>
      <ResponseObject populated={populated} />
      <Variables populated={populated} />
    </Container>
  )
}

export default ValuesContainer
