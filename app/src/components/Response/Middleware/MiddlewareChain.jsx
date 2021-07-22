/* eslint-disable array-callback-return */
import { React, useContext } from 'react';
import { Paper } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import * as actions from '../../../Global/actionTypes';
import { MainContainerContext } from '../../../Global/context/MainContainerContext';

const styles = {
  container: {
    background: '#1e2125',
    height: '97%',
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'start',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '1rem',
    margin: 0,
    gap: '.2rem 0',
    color: 'white',
    overflowY: 'auto',
  },
  title: {
    margin: 0,
    alignSelf: 'center',
  },
  timing: {
    fontSize: 10,
  },
  paperContainer: {
    width: '100%',
    minHeight: '4rem',
    background: '#1e2125',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    color: 'white',
    fontSize: '16px',
  },
};

const createDropdownStyles = (status, middlewareIdx, idx) => {
  const styleObj = {
    cursor: 'pointer',
    width: '80%',
    color: 'white',
    fontSize: '10px',
    margin: 0,
    textOverflow: 'ellipsis',
  };

  if (status === 'passed') {
    styleObj.background = 'darkgreen';
  } else if (status === 'error') {
    styleObj.background = 'maroon';
  } else {
    styleObj.background = 'black';
  }

  if (middlewareIdx === idx) {
    styleObj.borderColor = 'green';
  }

  return styleObj;
};

const MiddlewareChain = ({
  middleware, dispatch, activeIdx, populated,
}) => (populated
  ? (
    <PopulatedMiddlewareChain
      middleware={middleware}
      dispatch={dispatch}
      activeIdx={activeIdx}
    />
  )
  : <NullMiddlewareChain />);

const NullMiddlewareChain = () => (
  <Paper style={styles.container} elevation={3}>
    <h4 style={styles.title}>
      Execution Order
    </h4>
  </Paper>
);

const generateMiddlewareChain = (middleware, dispatch) => {
  const toggleFunc = (idx) => dispatch({ type: actions.TOGGLE_MIDDLEWARE, payload: { idx } });
  const { state: { allTabs, currentTabIdx } } = useContext(MainContainerContext);

  const map = [];
  if (middleware.length === 0) return;

  middleware.map((func, idx, arr) => {
    const { name, functionDef } = func;

    const dropdownStyle = createDropdownStyles(functionDef,
      allTabs[currentTabIdx]?.currentMiddlewareIdx, idx);

    map.push(
      <>
        <Paper
          key={Math.random() * 9999999 + name}
          elevation={3}
          variant="outlined"
          style={dropdownStyle}
          onClick={() => toggleFunc(idx)}
        >
          <p>
            <center>
              {name}
            </center>
          </p>
        </Paper>
        {
          idx < arr.length - 1
            ? <ArrowDownwardIcon style={styles.arrowIcon} key={`arrow${name}`} /> : null
        }
      </>,
    );
  });

  // eslint-disable-next-line consistent-return
  return map;
};

const PopulatedMiddlewareChain = ({ middleware, dispatch }) => (
  // Adding scroll Class and css in App.css until we can figure out issues
  // with integrating with MUI
  <Paper style={styles.container} elevation={3} className="scroll">
    <h4 style={styles.title}>
      Execution Order
    </h4>
    <p style={styles.timing}>
      {/* {`Total Execution Time: 3 secs`} */}
    </p>
    {
      generateMiddlewareChain(middleware, dispatch)
    }
  </Paper>
);

export default MiddlewareChain;
