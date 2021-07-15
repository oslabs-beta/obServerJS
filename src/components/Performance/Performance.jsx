import React, { useContext } from 'react'
import {
  Container,
} from '@material-ui/core'
import { MainContainerContext } from '../../Global/context/MainContainerContext'
import MiddlewareChain from '../Response/Middleware/MiddlewareChain'

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
    border: '1px solid blue'
  },
  infoContainer: {
    display: 'flex', 
    width: '100%',
    flexDirection: 'column',
    padding: 0,
    margin: 0,
  }, 
}

const PerformanceContainer = () => {
  const { 
    state: { 
      allTabs, 
      currentTabIdx 
    }, 
    dispatch 
  } = useContext(MainContainerContext)

  const currentTab = allTabs[currentTabIdx]

  const populated = allTabs[currentTabIdx].middleware?.length ? true : false

  return (
    <Container style={styles.mainContainer}>
      Performance
    </Container>
  )
}

export default PerformanceContainer
