import React, { useContext } from 'react';
import { Container, Paper } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex', 
    justifyContent: 'space-around',
    alignItems: 'center',
  }, 
  paper: {
    background: '#292c30',
    height: '90%',
    width: '40%',
    color: 'white'
  },
}

const IndividualTestView = ({testCase}) => {
  return (
    <Container style={styles.container}>
      <Paper style={styles.paper}>
        <h1>Expected</h1>
        {testCase.expectedResponse}
      </Paper>

      <Paper style={styles.paper}>
        <h1>Received</h1>
        {testCase.receivedResponse}
      </Paper>
    </Container>
  )
}

export default IndividualTestView