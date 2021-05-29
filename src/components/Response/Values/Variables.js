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
<<<<<<< HEAD
      {/* {Object.keys(activeMiddleware?.variables)?.length 
=======
      {Object.keys(activeMiddleware?.variables)?.length 
>>>>>>> b6c679d4af2447008678f4e0f19d443b1df5d86f
        ? activeMiddleware.variables.map((variableObj) => {
          return Object.keys(variableObj).map((variable) => (
            <p key={variable} style={styles.variables}>
              <span style={styles.key}>{variable}: </span>
              <span style={styles.value}> {variableObj[variable]}</span>
            </p>
          ))
<<<<<<< HEAD
        }): <p>No variables found</p>} */}
        <p>No Variables found </p>
=======
        }): <p>No variables found</p>}
>>>>>>> b6c679d4af2447008678f4e0f19d443b1df5d86f
    </Paper>
  )
}

export default Variables
