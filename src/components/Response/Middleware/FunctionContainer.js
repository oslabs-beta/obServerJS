import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {
  Container,
} from '@material-ui/core'

const styles = {
  mainContainer: {
    border: '1px solid white', 
    height: '100%',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
  }, 
}

const FunctionContainer = ({ activeMiddleware }) => {
  return (
    <Container style={styles.mainContainer}>
      <SyntaxHighlighter
        language="javascript"
        style={solarizedDark}
        showLineNumbers={true}
      >
        {activeMiddleware.code}
      </SyntaxHighlighter>
      
    </Container>
  )
}

export default FunctionContainer
