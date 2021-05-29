import React, { useContext } from 'react'
import {
  Container,
} from '@material-ui/core'
import { MainContainerContext } from '../../Global/context/MainContainerContext'
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
    maxWidth: '100%',
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
  const { state: { allTabs, currentTabIdx } } = useContext(MainContainerContext)

  const populated = allTabs[currentTabIdx].middleware?.length ? true : false

  return (
    <Container style={styles.mainContainer}>
      <MiddlewareContainer populated={populated} />

      <ValuesContainer populated={populated} />
    </Container>
  )
}

export default ResponseContainer
