import React, { useContext } from 'react'
import {
  Box,
  Container,
} from '@material-ui/core'
import * as actions from '../../../Global/actionTypes'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const styles = {
  container: {
    height: '100%',
    border: '1px solid white',
  },
}

const createDropdownStyles = (status) => {
  const styleObj = {
    margin: 0,
    padding: 0,
    cursor: 'pointer',
  }
  if (status === 'passed') 
    styleObj.color = 'darkgreen'
  else if (status === 'error') 
    styleObj.color = 'red'
  else 
    styleObj.color = 'gray'

  return styleObj
}

const MiddlewareChain = ({ middleware, dispatch }) => {

  const toggleFunc = (idx) => dispatch({ type: actions.TOGGLE_MIDDLEWARE, payload: { idx } })

  return (
    <Container style={styles.container}>
      {middleware.map((func, idx) => {
          const { name, status } = func

          return (
            <Box style={createDropdownStyles(status)} key={name} onClick={() => toggleFunc(idx)}>
              <p>{name}</p>
              <ArrowDownwardIcon />
            </Box>
          )
        })}
    </Container>
  )
}

export default MiddlewareChain
