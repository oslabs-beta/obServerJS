import React, { useContext } from 'react'
import { Paper } from '@material-ui/core'
import { MainContainerContext } from '../../../Global/context/MainContainerContext'

const styles = {
  container: {
    background: '#1e2125',
    borderRadius: 12,
    padding: 0,
    margin: 0,
    display: 'flex', 
    flexDirection: 'column',
    minHeight: '40%',
    width: '100%',
    color: 'white',
  }, 
  title: {
    color: 'white',
  },
  key: {
    color: 'gray',
    fontSize: 14,
  }, 
  value: {
    color: 'white',
    fontSize: 14,
  },
  variables: {
    minWidth: '100px',
    maxWidth: '200px',
    display: 'flex', 
    justifyContent: 'space-between',
    margin: '0 5rem'
  }
}

const Variables = ({ populated }) => {
 return populated 
 ? <PopulatedVariablesObject />
 : <NullVariablesObject />
}

const NullVariablesObject = () => {
  return (
    <Paper elevation={3} style={styles.container}>
      <h1 style={styles.title}>
        Variables
      </h1>
    </Paper>
  )
}



const PopulatedVariablesObject = () => {
  const { 
    state: { 
      allTabs, 
      currentTabIdx
    }, 
  } = useContext(MainContainerContext)

  const currentTab = allTabs[currentTabIdx]
  const middlewareIdx = currentTab.currentMiddlewareIdx
  const activeMiddleware = currentTab.middleware[middlewareIdx]

  return (
    <Paper elevation={3} style={styles.container}>
      <h1 style={styles.title}>
        Variables
      </h1>
      {Object.keys(activeMiddleware?.variables)?.length 
        ? activeMiddleware.variables.map((variableObj) => {
          return Object.keys(variableObj).map((variable) => (
            <p key={variable} style={styles.variables}>
              <span style={styles.key}>{variable}: </span>
              <span style={styles.value}> {variableObj[variable]}</span>
            </p>
          ))
        }): <p>No variables found</p>}
    </Paper>
  )
}

export default Variables
