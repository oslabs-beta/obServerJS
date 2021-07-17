import { React, useContext } from 'react';
import { Container } from '@material-ui/core';
import { MainContainerContext } from '../../Global/context/MainContainerContext';
import TestControls from './TestControls';
import TestComponent from './TestComponent';
import AddTestModal from './AddTestModal';

const styles = {
  container: {
    gridArea: 'tabs',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 0,
    margin: 0,
    width: '20%',
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

const TestMenuBar = ({
  openModal, closeModal, showModal, setCurrentTest,
}) => {
  const { state: { allTests } } = useContext(MainContainerContext);

  return (
    <Container style={styles.container}>
      <TestControls openModal={openModal} allTests={allTests} />
      {allTests.map((test) => <TestComponent test={test} setCurrentTest={setCurrentTest} />)}
      {showModal ? <AddTestModal showModal={showModal} closeModal={closeModal} /> : null}
    </Container>
  );
};

export default TestMenuBar;
