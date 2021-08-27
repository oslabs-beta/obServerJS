import React, { useContext } from 'react';
import {
  Container,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { MainContainerContext } from '../../Global/context/MainContainerContext';
import * as actions from '../../Global/actionTypes';

const makeStyles = (active) => ({
  container: {
    background: '#1e2125',
    width: '250px',
    borderBottom: active ? '3px solid #8bd8bd' : 'none',
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
    paddingLeft: '5px',
  },
  link: {
    width: '60%',
    overflowX: 'hidden',
  },
  closeIcon: {
    background: '#1e2125',
    color: '#aaaaaa',
  },
});

const Tab = ({ tabData }) => {
  const { state: { currentTabIdx }, dispatch } = useContext(MainContainerContext);
  const active = tabData.tabOrder === currentTabIdx;
  const styles = makeStyles(active);

  const makeActiveTab = () => {
    dispatch({
      type: actions.CHANGE_ACTIVE_TAB,
      payload: tabData.tabOrder,
    });
  };

  const closeTab = () => {
    dispatch({
      type: actions.CLOSE_TAB,
      payload: currentTabIdx,
    });
  };

  return (
    <Container style={styles.container} onClick={makeActiveTab}>
      <span style={styles.method}>{tabData.method}</span>
      <span style={styles.link}>{tabData.link}</span>
      <IconButton onClick={() => closeTab()} fontSize="small"><CloseIcon style={styles.closeIcon} /></IconButton>
    </Container>
  );
};

// PropTypes added to catch errors with typechecking
Tab.propTypes = {
  // validates the tabData prop and corresponding values
  // if the tabData prop is not present or invalid data type, it will throw an error in the console
  tabData: PropTypes.shape({
    method: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    tabOrder: PropTypes.number.isRequired,
  }).isRequired,
};

export default Tab;
