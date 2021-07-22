import React, { useContext } from 'react';
import { Paper } from '@material-ui/core';
import { MainContainerContext } from '../../../Global/context/MainContainerContext';
import '../../../App.css';

const styles = {
  container: {
    background: '#1e2125',
    borderRadius: 12,
    padding: 0,
    margin: 0,
    minHeight: '40%',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'auto',
  },
  title: {
    color: 'white',
    alignSelf: 'center',
  },
  key: {
    color: 'gray',
    fontSize: 14,
  },
  value: {
    color: 'white',
    fontSize: 14,
  },
  keys: {
    minWidth: '100px',
    maxWidth: '200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'start',
    color: 'green',
  },
  values: {
    minWidth: '100px',
    maxWidth: '300px',
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'start',
    margin: '0 5rem',
    color: 'white',
  },
  curlyBrace: {
    color: 'yellow',
  },
};

const ResponseObject = ({ populated }) => (populated
  ? <PopulatedResponseObject />
  : <NullResponseObject />);

const NullResponseObject = () => (
  <Paper elevation={3} style={styles.container}>
    <h1 style={styles.title}>
      Response
    </h1>
  </Paper>
);

const PopulatedResponseObject = () => {
  const {
    state: {
      allTabs,
      currentTabIdx,
    },
  } = useContext(MainContainerContext);

  const currentTab = allTabs[currentTabIdx];

  const jsonparse = (jsonObj) => {
    if (Object.keys(jsonObj).length === 0 || jsonObj === null) return <p />;
    const keyValPairs = [];

    const obj = JSON.parse(jsonObj);

    // We don't exactly know the format of the data being returned,
    // so we have to account for many cases
    // Let's assume for now there aren't nested, but that case will need to be handled.
    // We can also optimize code reuse here, and
    // the physical display of the objects should ideally be cleaned up too.

    // Array of objects:
    if (Object.prototype.toString.call(obj) === '[object Array]') {
      obj.forEach((el) => {
        keyValPairs.push(<p style={styles.curlyBrace}>{'{'}</p>);

        Object.keys(el).forEach((key) => {
          keyValPairs.push(
            <code style={styles.keys}>
              {key}
              {' '}
              :
            </code>,
            <code style={styles.values}>
              {' '}
              {el[key]}
            </code>,
          );
        });

        keyValPairs.push(<p style={styles.curlyBrace}>{'}'}</p>);
      });
    } else if (Object.prototype.toString.call(obj) === '[object Object]') {
    // Single Object:
      keyValPairs.push(<p style={styles.curlyBrace}>{'{'}</p>);
      Object.keys(obj).forEach((key) => {
        keyValPairs.push(
          <code style={styles.keys}>
            {key}
            {' '}
            :
          </code>,
          <code style={styles.values}>
            {' '}
            {obj[key]}
          </code>,
        );
      });
      keyValPairs.push(<p style={styles.curlyBrace}>{'}'}</p>);
    }

    return keyValPairs;
  };

  return (
    // Adding scroll Class and css in App.css until we can figure out issues
    // with integrating with MUI
    <Paper elevation={3} style={styles.container} className="scroll">
      <h1 style={styles.title}>
        Response
      </h1>
      {
        jsonparse(currentTab.response)
      }
    </Paper>
  );
};

export default ResponseObject;
