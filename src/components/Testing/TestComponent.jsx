import React from 'react';
import { Paper } from '@material-ui/core';

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
  },
};

const TestComponent = ({ test, setCurrentTest }) => {
  const generateTestColor = () => {
    if (test?.status === 1) return styles.containerPass;
    if (test?.status === 0) return styles.containerFail;
    // eslint-disable-next-line no-prototype-builtins
    if (!test.hasOwnProperty('status')) return styles.containerOther;
    return styles.containerOther;
  };

  const generateTesStatus = () => {
    if (test?.status === 1) return 'PASSED';
    if (test?.status === 0) return 'FAILED';
    // eslint-disable-next-line no-prototype-builtins
    if (!test.hasOwnProperty('status')) return 'NOT RUN';
    return 'NOT RUN';
  };

  const style = generateTestColor();
  const status = generateTesStatus();
  return (
    <Paper style={style} onClick={() => setCurrentTest(test)}>
      <span>{test.url}</span>
      <span>{test.method}</span>
      <span>{status}</span>
    </Paper>
  );
};

export default TestComponent;
