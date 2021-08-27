import React from 'react';
import {
  Box,
} from '@material-ui/core';

const makeStyles = (selected) => ({
  box: {
    background: (selected ? '#3f4245' : '#292c30'),
    color: 'white',
    height: '60px',
    width: '100%',
    margin: '0 0 5px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.6rem',
    borderLeft: (selected ? '4px solid #50b26c' : 'none'),
    boxSizing: 'border-box',
  },
});

const Buttons = ({ text }) => {
  // const [state: {  }, dispatch] = useContext();
  const styles = makeStyles(true);
  return (
    <Box style={styles.box}>
      {text}
    </Box>
  );
};

export default Buttons;
