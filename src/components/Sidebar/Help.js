import React, { useContext } from 'react'
import {
  Box,
} from '@material-ui/core';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

const styles = {
  box: {
    background: '#292c30',
    color: 'white',
    height: '60px',
    width: '100%',
    margin: '0 0 5px 0',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.6rem',
    boxSizing: 'border-box',
  }

}

const Help = () => {
  return (
    <Box style={styles.box}>
      <HelpOutlineOutlinedIcon />
    </Box>
  )
}

export default Help
