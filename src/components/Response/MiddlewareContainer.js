import React, { useContext, useState } from 'react'
import { MainContainerContext } from '../../Global/context/MainContainerContext'
import {
  Box,
  Container,
} from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import * as actions from '../../Global/actionTypes';

const styles = {
  container: {
    display: 'flex',
    margin: 0,
    padding: 0,
    height: '100%',
    background: '#1e2125',
    borderRadius: 12,
    width: '50%',
  },
  functionNames: {
    height: '100%',
    color: 'darkgreen',
  }, 
  functionContent: {
    height: '50%',
    color: 'white', 
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    background: 'gray',
    fontSize: '10px',
    borderRadius: '12px',
  }, 
  code: {
    background: 'black',
    fontSize: 10, 
    color: 'white',
    padding: '1rem',
    borderRadius: 8,
  }
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

const MiddlewareFunc = () => {
  const { state: { currentRoute: { middleware } }, dispatch } = useContext(MainContainerContext)

  const toggleFunc = (idx) => dispatch({ type: actions.TOGGLE_MIDDLEWARE, payload: { idx } })

  return (
    <Container style={styles.container}>
      <Container style={styles.functionNames}> 
        {middleware.map((func, idx) => {
          const { name, status, toggled, code} = func

          return (
            <Box style={createDropdownStyles(status)} key={name} onClick={() => toggleFunc(idx)}>
              <p>{name}</p>
              <ArrowDropDownIcon />
              {toggled ? (
                <Box style={styles.code}>
                  {code}
                </Box>
              ) : null}
            </Box>
          )
        })}
      </Container >
    </Container>
  )
}

export default MiddlewareFunc
