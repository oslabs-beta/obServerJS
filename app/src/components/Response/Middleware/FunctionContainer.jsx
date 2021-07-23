/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import {
  Container,
  makeStyles,
  Paper,
} from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '../../../App.css';

const useStyles = makeStyles({
  mainContainer: {
    height: '100%',
    width: '60%',
    padding: '20px',
    background: '#1e2125',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
  timing: {
    color: 'white',
    margin: '0',
    padding: 0,
  },
  codeContainer: {
    height: 300,
    width: 800,
    minWidth: 300,
    minHeight: 300,
    maxWidth: 800,
    maxHeight: 550,
  },
  button: {
    background: 'darkgrey',
    border: 'none',
    color: 'white',
    height: 20,
    width: 20,
    margin: '0 5px',
    outline: 'none',
  },
  code: {
    height: 'inherit',
    width: 'inherit',
    minHeight: 'inherit',
    maxHeight: 'inherit',
    minWidth: 'inherit',
    maxWidth: 'inherit',
    overflow: 'auto',
    resize: 'both',
    borderRadius: '8px',
    fontSize: (props) => props?.fontSize || 10,
    textAlign: 'left',
    '&::-webkit-scrollbar': {
      width: '10px',
      height: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'gray',
      borderRadius: '10px',
    },
    '&::-webkit-resizer': {
      background: 'gray',
    },
  },
});

const FunctionContainer = ({ currentTab, populated }) => (
  populated
    ? <PopulatedFunctionContainer currentTab={currentTab} />
    : <NullFunctionContainer />);

const NullFunctionContainer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.mainContainer}>
      Code not avaialble
    </Container>
  );
};

const PopulatedFunctionContainer = ({ currentTab }) => {
  const [fontSize, setFontSize] = useState(10);
  const classes = useStyles({ fontSize });

  const { currentMiddlewareIdx, middleware } = currentTab;

  const activeMiddleware = middleware[currentMiddlewareIdx];

  // eslint-disable-next-line no-prototype-builtins
  const functionAvailable = activeMiddleware?.hasOwnProperty('functionDef');
  return (
    <Paper className={classes.mainContainer} elevation={3}>
      <h3 className={classes.timing}>
        {/* {`Execution Time: 20 secs`} */}
      </h3>
      <Container className={classes.codeContainer}>
        <button
          className={classes.button}
          onClick={() => setFontSize((prev) => prev - 2)}
        >
          -
        </button>
        <button
          className={classes.button}
          onClick={() => setFontSize((prev) => prev + 2)}
        >
          +
        </button>
        <SyntaxHighlighter
          language="javascript"
          className={classes.code}
          style={atelierCaveDark}
          showLineNumbers
          wrapLongLines
          wrapLines
        >
          {
            functionAvailable
              ? activeMiddleware.functionDef
              : '// FUNCTION NOT AVAILABLE'
          }

        </SyntaxHighlighter>

      </Container>
    </Paper>
  );
};

export default FunctionContainer;
