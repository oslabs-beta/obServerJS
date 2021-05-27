import React, { useContext } from 'react'
import {
  Box,
} from '@material-ui/core';
import { MainContainerContext } from '../../Global/context/MainContainerContext'
import * as actions from '../../Global/actionTypes'

const makeStyles = (selected) => ({
  box: {
    background: (selected ? '#3f4245': '#292c30'),
    color: 'white',
    height: '60px',
    width: '100%',
    margin: '0 0 5px 0',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.6rem',
    borderLeft: (selected ? '4px solid #50b26c': 'none'),
    boxSizing: 'border-box',
  }
})

const Button = ({text}) => {
const { state: { sidebarSelection }, dispatch } = useContext(MainContainerContext)

const changeWindow = () => {
  dispatch({
    type: actions.CHANGE_WINDOW, 
    payload: text,
  })
}

  const styles = makeStyles(sidebarSelection === text)
  return (
    <Box style={styles.box} onClick={changeWindow}>
      {text}
    </Box>
  )
}

export default Button
