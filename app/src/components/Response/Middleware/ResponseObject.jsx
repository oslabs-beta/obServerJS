import React, { useContext } from 'react';
import { Paper } from '@material-ui/core';
import { MainContainerContext } from '../../../Global/context/MainContainerContext';

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
  },
  title: {
    color: 'white',
  },
  key: {
    color: 'gray',
    fontSize: 14,
  },
  value: {
    color: 'white',
    fontSize: 14,
  },
  variables: {
    minWidth: '100px',
    maxWidth: '200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'center',
    margin: '0 5rem',
    color: 'white',
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
        Object.keys(el).forEach((key) => {
          keyValPairs.push(
            <p style={styles.variables}>
              {key}
              {' '}
              :
              {' '}
              {obj[key]}
            </p>,
          );
        });
      });
    } else if (Object.prototype.toString.call(obj) === '[object Object]') {
    // Single Object:
      Object.keys(obj).forEach((key) => {
        keyValPairs.push(
          <p style={styles.variables}>
            {key}
            {' '}
            :
            {' '}
            {obj[key]}
          </p>,
        );
      });
    }

    return keyValPairs;
  };

  return (
    <Paper elevation={3} style={styles.container}>
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
