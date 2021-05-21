import React, { useContext } from 'react';
import {
  Container, withTheme
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { MainContainerContext } from '../../Global/context/MainContainerContext';
import Tab from './Tab';


const styles = {
  container: {
    gridArea: 'tabs',
    display: 'flex',
    justifyContent: 'flex-start',
    border: '1px solid pink',
    padding: 0,
    margin: 0,
    background: '#383838',
  },
  addTab: {
    width: '5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white',
    border: '1px solid grey',
    borderRadius: 0,
    background: '#383838',
    margin: 0,
    padding: 0,
  },
  button: {
    color: '#aaaaaa',
  }
}

const TabContainer = () => {
  const { state: { allTabs } } = useContext(MainContainerContext);

  const addNewTab = () => {
    alert('tab added')
  }

  return (
    <Container style={styles.container}>
      {allTabs.map((tab, idx) => <Tab tabData={tab} key={idx} />)}
      <Container style={styles.addTab} onClick={addNewTab}>
        <IconButton onClick={addNewTab} style={styles.button} label="tab" component="span">
          <AddIcon />
        </IconButton>
      </Container>
    </Container>
  )
}

export default TabContainer
