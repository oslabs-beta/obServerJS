import React from 'react'
import { Paper } from '@material-ui/core'
import * as actions from '../../../Global/actionTypes'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const styles = {
  container: {
    background: '#1e2125',
    height: '90%',
    width: '20%',
    display: 'flex', 
    flexDirection: 'column',
    alignSelf: 'start',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '1rem', 
    margin: 0,
    gap: '.2rem 0',
    color: 'white',
  },
  title: {

  },
  arrowIcon: {
    color: 'white',
    fontSize: '16px',
  }
}

const createDropdownStyles = (status) => {
  const styleObj = {
    cursor: 'pointer',
    width: '80%',
    color: 'white',
    fontSize: '10px',
    margin: 0,
  }
  if (status === 'passed') 
    styleObj.background = 'darkgreen'
  else if (status === 'error') 
    styleObj.background = 'maroon'
  else 
    styleObj.background = 'gray'

  return styleObj
}

const MiddlewareChain = ({ middleware, dispatch }) => {

  const toggleFunc = (idx) => dispatch({ type: actions.TOGGLE_MIDDLEWARE, payload: { idx } })

  return (
    <Paper style={styles.container} elevation={3}>
      <h4 style={styles.title}>
        Execution Order
      </h4>
      
      {middleware.map((func, idx) => {
          const { name, status } = func
          const dropdownStyle = createDropdownStyles(status)
          return (
            <>
            <Paper 
              key={name + idx} 
              elevation={3}
              variant="outlined" 
              style={dropdownStyle}
              onClick={() => toggleFunc(idx)}>
              <p>
                {name}
              </p>
              
            </Paper>
            <ArrowDownwardIcon style={styles.arrowIcon} key={idx} />
            </>
          )
        })}
    </Paper>
  )
}

export default MiddlewareChain
