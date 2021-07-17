import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import IndividualTestView from './IndividualTestView';
import TestMenuBar from './TestMenuBar';

const styles = {
  container: {
    gridArea: 'windows',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 0,
    margin: 0,
    background: '#1e2125',
  },
  addTab: {
    width: '5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white',
    border: '1px solid grey',
    borderRadius: 0,
    background: '#1e2125',
    margin: 0,
    padding: 0,
  },
  button: {
    color: '#aaaaaa',
  },
};

const TestContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentTest, setCurrentTest] = useState(null);
  const handleClose = () => setShowModal(false);
  const handleOpen = () => setShowModal(true);

  return (
    <Container style={styles.container}>
      <TestMenuBar
        openModal={handleOpen}
        closeModal={handleClose}
        showModal={showModal}
        setCurrentTest={setCurrentTest}
      />

      {currentTest && (
        <IndividualTestView testCase={currentTest} />
      )}

    </Container>
  );
};

export default TestContainer;
