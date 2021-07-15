import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { MainContainerContext } from '../../Global/context/MainContainerContext';
import Tab from './Tab';
import * as actions from '../../Global/actionTypes';


const styles = {
  container: {
    gridArea: 'tabs',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 0,
    margin: 0,
    background: '#1e2125',
  },
  addTab: {
    width: '5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white',
    border: '1px solid grey',
    borderRadius: 0,
    background: '#1e2125',
    margin: 0,
    padding: 0,
  },
  button: {
    color: '#aaaaaa',
  }
}

const TabContainer = () => {
  const { state: { allTabs }, dispatch } = useContext(MainContainerContext);

  const addNewTab = () => {

    dispatch({
      type: actions.NEW_TAB,
      payload: {
        link: 'New Tab',
        route: '',
        method: 'METHOD',
        active: true,
        body: '',
        currentMiddlewareIdx: 0,
        tabOrder: allTabs.length,
        middleware: []
      },
    })
  }

  return (
    <Container style={styles.container} maxWidth={false}>
      {allTabs.map((tab, idx) => <Tab tabData={tab} key={idx} />)}
      <Container style={styles.addTab} onClick={addNewTab}>
        <IconButton style={styles.button} label="tab" component="span">
          <AddIcon />
        </IconButton>
      </Container>
    </Container>
  )
}

export default TabContainer
