import React from 'react';
import { Paper } from '@material-ui/core'

const styles = {
  containerFail: {
    backgroundColor: 'darkred',
    color: 'white',
    margin: '.5rem',
    padding: '.6rem',
    display: 'flex',
    flexDirection: 'column',
  }, 
  containerPass: {
    backgroundColor: 'darkgreen',
    color: 'white',
    margin: '.5rem',
    padding: '.6rem',
    display: 'flex',
    flexDirection: 'column',
  }, 
  containerOther: {
    backgroundColor: 'gray',
    color: 'white',
    margin: '.5rem',
    padding: '.6rem',
    display: 'flex',
    flexDirection: 'column',
  }
}

const TestComponent = ({ test, setCurrentTest }) => {
  const generateTestColor = () => {
    if(test?.status === 1) return styles.containerPass
    else if(test?.status === 0) return styles.containerFail
    else if (!test.hasOwnProperty('status')) return styles.containerOther
  }

  const generateTesStatus = () => {
    if(test?.status === 1) return 'PASSED'
    else if(test?.status === 0) return 'FAILED'
    else if (!test.hasOwnProperty('status')) return 'NOT RUN'
  }

  const style = generateTestColor()
  const status = generateTesStatus()
  return (
    <Paper style={style} onClick={() => setCurrentTest(test)}>
      <span>{test.url}</span> 
      <span>{test.method}</span>
      <span>{status}</span>
    </Paper>
  )
}

export default TestComponent