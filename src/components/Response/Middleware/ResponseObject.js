import React, { useContext } from 'react'
import { Paper } from '@material-ui/core'
import { MainContainerContext } from '../../../Global/context/MainContainerContext'

const styles = {
  container: {
    background: '#1e2125',
    borderRadius: 12,
    padding: 0,
    margin: 0,
    minHeight: '40%',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
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
    alignSelf: 'center',
    margin: '0 5rem',
    color: 'white',
  }
}

const ResponseObject = ({ populated }) => {
  return populated
    ? <PopulatedResponseObject />
    : <NullResponseObject />
}

const NullResponseObject = () => {
  return (
    <Paper elevation={3} style={styles.container}>
      <h1 style={styles.title}>
        Response
      </h1>
    </Paper>
  )
}

const PopulatedResponseObject = () => {
  const {
    state: {
      allTabs,
      currentTabIdx
    },
  } = useContext(MainContainerContext)

  const currentTab = allTabs[currentTabIdx]
  const middlewareIdx = currentTab.currentMiddlewareIdx

  const jsonparse = (jsonObj) => {
    if (Object.keys(jsonObj).length === 0 || jsonObj === null) return <p></p>;
    let objVars = []

    let obj = JSON.parse(jsonObj)

    Object.keys(obj.vars).forEach((el, idx) => {
      objVars.push(<p style={styles.variables}>{el} : {obj.vars[el]}</p>)
    })

    return objVars
  }

  return (
    <Paper elevation={3} style={styles.container}>
      <h1 style={styles.title}>
        Response
      </h1>
      {
        jsonparse(currentTab.response)
      }
    </Paper>
  )
}

export default ResponseObject
