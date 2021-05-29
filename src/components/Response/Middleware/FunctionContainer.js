import React from 'react'
import {
  Container,
  makeStyles
} from '@material-ui/core'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    minHeight: '50%',
    minWidth: '50%',
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  code: {
    minHeight: '10rem',
    minWidth: '20rem',
    width: '100%',
    overflow: 'auto',
    resize: 'both',
    borderRadius: '8px',
    fontSize: '10px',
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
    }
  }
}))


const FunctionContainer = ({ currentTab, populated }) => {
  console.log('function container populated', populated)
  return populated
    ? <PopulatedFunctionContainer currentTab={currentTab} />
    : <NullFunctionContainer />
}

const NullFunctionContainer = () => {
  const classes = useStyles()
  return (
    <Container className={classes.mainContainer}>
      Code not avaialble
    </Container>
  )
}

const PopulatedFunctionContainer = ({ currentTab }) => {
  const classes = useStyles()

  const { currentMiddlewareIdx, middleware } = currentTab

  const activeMiddleware = middleware[currentMiddlewareIdx]

  const functionAvailable = activeMiddleware.hasOwnProperty('functionDef')
  return (
    <Container className={classes.mainContainer}>
      <SyntaxHighlighter
        language="javascript"
        className={classes.code}
        style={atelierCaveDark}
        showLineNumbers={true}
      >
        {
          functionAvailable
          ? activeMiddleware.functionDef
          : '// FUNCTION NOT AVAILABLE'
        }
      </SyntaxHighlighter>

    </Container>
  )
}

export default FunctionContainer
