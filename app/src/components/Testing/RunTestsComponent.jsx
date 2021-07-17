import React, { useContext } from 'react';
import lodash from 'lodash';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import * as actions from '../../Global/actionTypes';
import { MainContainerContext } from '../../Global/context/MainContainerContext';

const RunTestsComponent = () => {
  const { state: { allTests }, dispatch } = useContext(MainContainerContext);

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      fontSize: '30',
    },
    playButton: {
      color: 'green',
      fontSize: '30',
    },
    addButton: {
      color: 'red',
      fontSize: '30',
    },
  };

  const runSingleTest = async (url, methodType, bodyInput) => {
    let retData;

    if (methodType === 'PUT' || methodType === 'POST') {
      fetch(`${url}`, {
        method: `${methodType}`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bodyInput,
        }),
      })
        .then((data) => data.json())
        .then((data) => {
          retData = data.response;
        })
        .catch((error) => error);
    } else if (methodType === 'DELETE') {
      fetch(`${url}`, {
        method: `${methodType}`,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((data) => data.json())
        .then((data) => {
          retData = data.response;
        })
        .catch((error) => error);
    } else if (methodType === 'GET') {
      await fetch(url)
        .then((data) => data.json())
        .then((data) => {
          retData = data.response;
        })
        .catch((error) => error);
    }

    return retData;
  };

  const runTests = async () => {
    for (let i = 0; i < allTests.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const res = await runSingleTest(allTests[i].url, allTests[i].method, allTests[i].body);

      const passed = lodash.isEqual(res, allTests[i].expectedResponse);

      dispatch({
        type: actions.STORE_TEST_RESULT,
        payload: {
          testIdx: i,
          testResult: passed,
        },
      });

      allTests[i].receivedResponse = res;

      if (passed) {
        allTests[i].status = 1;
      } else {
        allTests[i].status = 0;
      }
    }
  };

  return (
    <PlayArrowIcon style={styles.playButton} onClick={runTests}>
      Run Tests Component
    </PlayArrowIcon>
  );
};

export default RunTestsComponent;
