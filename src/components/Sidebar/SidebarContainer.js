import React, { useContext } from 'react'
import {
  Container,
} from '@material-ui/core';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import TuneIcon from '@material-ui/icons/Tune';
import Button from './Buttons';
import Help from './Help';
import Settings from './Settings';

const styles = {
  container: {
    height: '500px',
    width: '100px',
    background: '#1e2125',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 0,
  }
}

const SidebarContainer = () => {
  // const [];
  const primaryButtons = ['Collections', 'Variables', 'Tree', 'Request', 'Response'];
  // const secondaryButtons = [<HelpOutlineOutlinedIcon />, <TuneIcon />];
  return (
    <Container maxWidth="sm" style={styles.container}>
      <div>
        {primaryButtons.map((option) => <Button text={option} key={option}/>)}
      </div>

      {/* {secondaryButtons.map((option) => <Button text={option} key={option}/>)} */}
      <div>
        <Help />
        <Settings />
      </div>

    </Container>
  )
}

export default SidebarContainer;
