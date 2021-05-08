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
  }, 
  addTab: {
    width: '5%',
    height: '33%',
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
  return (
    <Container style={styles.container}>
      {allTabs.map((tab) => <Tab tabData={tab}/>)}
      <Container style={styles.addTab}>
        <AddIcon />
      </Container>
    </Container>
  )
}

export default TabContainer
