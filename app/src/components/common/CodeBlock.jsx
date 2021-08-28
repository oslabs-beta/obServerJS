import React, { useState } from 'react';
import {
  Container,
  makeStyles,
} from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const useStyles = makeStyles({
  codeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 300,
    minHeight: 300,
    maxWidth: '100%',
    maxHeight: '97%',
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
    alignContent: 'start',
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

const CodeBlock = ({ functionDefinition }) => {
  const [fontSize, setFontSize] = useState(10);
  const classes = useStyles({ fontSize });
  return (
    <Container className={classes.codeContainer}>
      <span>
        <button
          type="button"
          className={classes.button}
          onClick={() => setFontSize((prev) => prev - 2)}
        >
          -
        </button>
        <button
          type="button"
          className={classes.button}
          onClick={() => setFontSize((prev) => prev + 2)}
        >
          +
        </button>
      </span>
      <SyntaxHighlighter
        language="javascript"
        className={classes.code}
        style={atelierCaveDark}
        showLineNumbers
        wrapLongLines
        wrapLines
      >
        {
          functionDefinition
        }
      </SyntaxHighlighter>
    </Container>
  );
};

export default CodeBlock;
