import React from 'react'
import { 
  Container, 
  makeStyles
} from '@material-ui/core'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

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


const FunctionContainer = ({ currentTab }) => {
  const classes = useStyles()

  const { currentMiddlewareIdx, middleware } = currentTab

  const activeMiddleware = middleware[currentMiddlewareIdx]

  return (
    <Container className={classes.mainContainer}>
      <SyntaxHighlighter
        language="javascript"
        className={classes.code}
        style={solarizedDark}
        showLineNumbers={true}
      >
        {activeMiddleware.code}
      </SyntaxHighlighter>
      
    </Container>
  )
}

export default FunctionContainer
