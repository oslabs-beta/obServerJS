import React, { useContext } from 'react';
import {
  Container
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
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
  }, 
  addTab: {
    width: '5%',
    display: 'flex', 
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white',
    background: '#1e2125',
    borderTopRightRadius: '12px',
    borderBottomRightRadius: '12px',
    margin: 0,
    padding: 0,
  }
}

const TabContainer = () => {
  const { state: { allTabs } } = useContext(MainContainerContext);

  const addNewTab = () => {

  }

  return (
    <Container style={styles.container}>
      {allTabs.map((tab, idx) => <Tab tabData={tab} key={idx}/>)}
      <Container style={styles.addTab} onClick={addNewTab}>
        <AddIcon />
      </Container>
    </Container>
  )
}

export default TabContainer
