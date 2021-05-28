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
  paperContainer: {
    width: '100%',
    minHeight: '4rem',
    background: '#1e2125',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
    styleObj.background = 'black'

  return styleObj
}

const MiddlewareChain = ({ middleware, dispatch, activeIdx, populated }) => {
  return populated 
  ? <PopulatedMiddlewareChain 
      middleware={middleware} 
      dispatch={dispatch} 
      activeIdx={activeIdx}
    />
  : <NullMiddlewareChain />
}

const NullMiddlewareChain = () => (
  <Paper style={styles.container} elevation={3}>
      <h4 style={styles.title}>
        Execution Order
      </h4>
    </Paper>
)

const PopulatedMiddlewareChain = ({ middleware, dispatch, activeIdx, }) => {
  const toggleFunc = (idx) => dispatch({ type: actions.TOGGLE_MIDDLEWARE, payload: { idx } })

    console.log("middleware map: ", middleware)
  return (
    <Paper style={styles.container} elevation={3}>
      <h4 style={styles.title}>
        Execution Order
      </h4>

      {middleware.map((func, idx) => {
        console.log(func)
        const { name, functionDef } = func
        const dropdownStyle = createDropdownStyles(functionDef)
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
