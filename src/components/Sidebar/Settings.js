import React, { useContext } from 'react'
import {
  Box,
} from '@material-ui/core';
import TuneIcon from '@material-ui/icons/Tune';

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

const Settings = () => {
  return (
    <Box style={styles.box}>
      <TuneIcon />
    </Box>
  )
}

export default Settings
