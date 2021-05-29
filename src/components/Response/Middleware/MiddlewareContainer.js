import React, { useContext } from 'react'
import { MainContainerContext } from '../../../Global/context/MainContainerContext'
import { Container } from '@material-ui/core'
import MiddlewareChain from './MiddlewareChain'
import FunctionContainer from './FunctionContainer'

const styles = {
  container: {
    display: 'flex',
    justfyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    height: '90%',
    borderRadius: 12,
    width: '200%',
  },
}

const MiddlewareFunc = ({ populated }) => {
  const { 
    state: { 
      allTabs, 
      currentTabIdx
    }, 
    dispatch 
  } = useContext(MainContainerContext)

    const currentTab = allTabs[currentTabIdx]

    console.log("CURRENT TAB: ", currentTab)
  return (
    <Container style={styles.container}>
      <MiddlewareChain 
        populated={populated}
        middleware={currentTab.middleware} 
        dispatch={dispatch} 
        activeIdx={currentTab.currentMiddlewareIdx} 
      />

      <FunctionContainer populated={populated} currentTab={currentTab} />
    </Container>
  )
}


export default MiddlewareFunc
