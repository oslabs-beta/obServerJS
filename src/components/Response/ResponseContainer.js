import React, { useContext } from 'react'
import { MainContainerContext } from '../../Global/context/MainContainerContext'
import {
  Box,
  Container,
} from '@material-ui/core'
import MiddlewareContainer from './MiddlewareContainer'
import ResponseObject from './ResponseObject'
import Variables from './Variables'

const styles = {
  mainContainer: {
    background: '#292c30',
    gridArea: 'windows',
    display: 'flex', 
    flexDirection: 'row',
    padding: 0,
    margin: 0,
  }, 
  responseContainer: {
    width: '60%',
    height: '90%',
  }, 
  requestValues: {
    background: 'yellow',
  },
  infoContainer: {
    display: 'flex', 
    width: '40%',
    flexDirection: 'column',
  }, 
  responseValues: {
    background: 'purple',
    height: '50%',
  }, 
  variables: {
    background: 'green',
    height: '50%',
  }
}

const ResponseContainer = () => {
  const { state: { currentRoute } } = useContext(MainContainerContext)


  return (
    <Container style={styles.mainContainer}>
      <Container style={styles.responseContainer} className="responseContainer">
        {`${currentRoute.method}: ${currentRoute.routeName}`}
        <MiddlewareContainer />
      </Container>

      <Container style={styles.infoContainer}>
        <ResponseObject />
        <Variables />
      </Container>
    </Container>
  )
}

export default ResponseContainer
