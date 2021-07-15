import React, { useContext } from 'react'
import {
  Container,
} from '@material-ui/core';
import Button from './Button';
import Help from './Help';
import Settings from './Settings';


const styles = {
  container: {
    minHeight: '500px',
    width: '100px',
    background: '#1e2125',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '45px 0',
    margin: 0,
    gridArea: 'sidebar'
  },
}

const SidebarContainer = () => {
  const primaryButtons = ['Tree', 'Response', 'Testing'];
  return (
    <Container maxWidth="sm" style={styles.container}>
      <div>
        {primaryButtons.map((option) => <Button text={option} key={option} />)}
      </div>
      <div>
        <Help />
        <Settings />
      </div>

    </Container>
  )
}

export default SidebarContainer;
