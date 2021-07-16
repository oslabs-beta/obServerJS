import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Container } from '@material-ui/core';
import RunTestsComponent from './RunTestsComponent';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    fontSize: '30',
  },
  playButton: {
    color: 'green',
    fontSize: '30',
  },
  addButton: {
    color: 'red',
    fontSize: '30',
  },
};

const TestControls = ({ openModal, allTests }) => {
  let passing = 0;
  allTests.forEach((test) => {
    if (test?.status) passing += 1;
  });

  return (
    <Container style={styles.container}>
      <RunTestsComponent />
      <p>
        {passing}
        {' '}
        /
        {' '}
        {allTests.length}
        {' '}
        Passing
      </p>
      <AddIcon style={styles.addButton} onClick={() => openModal()} />
    </Container>
  );
};

export default TestControls;
