/* eslint-disable react/button-has-type */
import React from 'react';
import {
  Container,
  makeStyles,
  Paper,
} from '@material-ui/core';
import CodeBlock from '../../common/CodeBlock';

const useStyles = makeStyles({
  mainContainer: {
    width: '45%',
    padding: '0 20px',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    background: '#1e2125',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
  title: {
    color: 'white',
    alignSelf: 'center',
  },
});

const FunctionContainer = ({ currentTab, populated }) => (
  populated
    ? <PopulatedFunctionContainer currentTab={currentTab} />
    : <NullFunctionContainer />
);

const NullFunctionContainer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.mainContainer}>
      Code not avaialble
    </Container>
  );
};

const PopulatedFunctionContainer = ({ currentTab }) => {
  const classes = useStyles();

  const { currentMiddlewareIdx, middleware } = currentTab;

  const activeMiddleware = middleware[currentMiddlewareIdx];

  return (
    <Paper className={classes.mainContainer} elevation={3}>
      <h1 className={classes.title}>
        Function
      </h1>
      <CodeBlock
        functionDefinition={
          activeMiddleware?.functionDef || '// FUNCTION NOT AVAILABLE'
        }
      />
    </Paper>
  );
};

export default FunctionContainer;
