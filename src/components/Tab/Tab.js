import React, { useContext } from 'react'
import {
  Container
} from '@material-ui/core';
import { MainContainerContext } from '../../Global/context/MainContainerContext';
import * as actions from '../../Global/actionTypes';

const makeStyles = (tabData) => ({
  container: {
    background: '#1e2125',
    width: '250px',
    borderBottom: tabData.active ? '3px solid #8bd8bd' : 'none',
    borderRight: '1px solid gray',
    borderRadius: 0,
    color: '#aaaaaa',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  method: {
    color: 'darkgray',
    fontSize: '.8rem',
  },
  link: {

  }
})

const Tab = ({ tabData }) => {
  const { dispatch } = useContext(MainContainerContext);
  const styles = makeStyles(tabData)

  const makeActiveTab = () => {
    console.log(tabData.tabOrder)
    dispatch({
      type: actions.CHANGE_ACTIVE_TAB,
      payload: tabData.tabOrder
    })
  }

  return (
    <Container style={styles.container} onClick={makeActiveTab}>
      <span style={styles.method}>{tabData.method}</span>
      <span style={styles.link}>{tabData.link}</span>

    </Container>
  )
}

export default Tab
