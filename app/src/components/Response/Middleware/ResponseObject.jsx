import React, { useContext, useState } from 'react';
import {
  makeStyles,
  Paper,
  Container,
} from '@material-ui/core';
import { format as prettyFormat } from 'pretty-format'; // ES2015 modules
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { MainContainerContext } from '../../../Global/context/MainContainerContext';

const useStyles = makeStyles({
  container: {
    background: '#1e2125',
    borderRadius: 12,
    padding: 0,
    margin: 0,
    minHeight: '40%',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'auto',
    alignItems: 'center',
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
  title: {
    color: 'white',
    alignSelf: 'center',
  },
  key: {
    color: 'gray',
    fontSize: 14,
  },
  value: {
    color: 'white',
    fontSize: 14,
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
  curlyBrace: {
    alignSelf: 'start',
    color: 'yellow',
  },
  codeContainer: {
    minWidth: 300,
    minHeight: 300,
    maxWidth: '100%',
    maxHeight: '97%',
    overflow: 'none',
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

const ResponseObject = ({ populated }) => (populated
  ? <PopulatedResponseObject />
  : <NullResponseObject />);

const NullResponseObject = () => {
  const styles = useStyles();
  return (
    <Paper elevation={3} className={styles.container}>
      <h1 className={styles.title}>
        Response
      </h1>
    </Paper>
  );
};

const PopulatedResponseObject = () => {
  const {
    state: {
      allTabs,
      currentTabIdx,
    },
  } = useContext(MainContainerContext);

  const currentTab = allTabs[currentTabIdx];
  const [fontSize, setFontSize] = useState(10);
  const styles = useStyles({ fontSize });

  return (
    <Paper elevation={3} className={styles.container}>
      <h1 className={styles.title}>
        Response
      </h1>

      <Container className={styles.codeContainer}>
        <button
          type="button"
          className={styles.button}
          onClick={() => setFontSize((prev) => prev - 2)}
        >
          -
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => setFontSize((prev) => prev + 2)}
        >
          +
        </button>
        <SyntaxHighlighter
          language="javascript"
          showLineNumbers
          className={styles.code}
          style={atelierCaveDark}
          wrapLongLines
          wrapLines
        >
          {
            prettyFormat(JSON.parse(currentTab.response))
          }
        </SyntaxHighlighter>
      </Container>
    </Paper>
  );
};

export default ResponseObject;
