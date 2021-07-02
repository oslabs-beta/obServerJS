import React, { useContext } from 'react'
import { MainContainerContext } from '../../../Global/context/MainContainerContext'
import { Container } from '@material-ui/core'
import MiddlewareChain from './MiddlewareChain'
import FunctionContainer from './FunctionContainer'
import ResponseObject from './ResponseObject'

const styles = {
  container: {
    display: 'flex',
    justfyContent: 'space-between',
    alignItems: 'center',
    gap: '0 1rem',
    margin: 0,
    padding: 0,
    height: '90%',
    borderRadius: 12,
  },
  info: {
    width: '50%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
   
  }
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
    <Container style={styles.container}  maxWidth={false}>
      <div style={styles.info}>
        <MiddlewareChain 
          populated={populated}
          middleware={currentTab.middleware} 
          dispatch={dispatch} 
          activeIdx={currentTab.currentMiddlewareIdx} 
        />
        <ResponseObject populated={populated} />
      </div>
      
      <FunctionContainer populated={populated} currentTab={currentTab} />
    </Container>
  )
}


export default MiddlewareFunc
