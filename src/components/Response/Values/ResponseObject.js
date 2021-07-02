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
    width: '100%',
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
  // const response = currentTab?.middleware[middlewareIdx]?.response || undefined
  // let rsp = [];
  // console.log(currentTab.response)
  let responseJ = JSON.parse(currentTab.response)
  // for (let i = 0; i < Object.keys(responseJ).length; i++) {
  //   console.log("responseJ: ", responseJ)
  //   rsp += <p style={styles.variables}>"hi"</p>
  // }
  return (
    <Paper elevation={3} style={styles.container}>
      <h1 style={styles.title}>
        Response
      </h1>
      <p style={styles.variables}>asdfasdfasdf</p>
      {
        Object.entries(responseJ.vars).forEach(([key, value], idx) => {
          <p style={styles.variables}>asdfasdfasdf</p>
          console.log("responseJ: ", responseJ)
          console.log("key: ", key)
          console.log("value: ", value)
        })
      }
      {/* {Object.entries(response).map(([key, value], idx) => (
        <p key={idx} style={styles.variables}>
          <span style={styles.key}>{key}: </span>
          <span style={styles.value}>{value}</span>
        </p>
      ))} */}
    </Paper>
  )
}

export default ResponseObject
