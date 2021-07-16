import { MainContainerContext } from '../../Global/context/MainContainerContext';
import React, { useContext } from 'react';
import lodash from 'lodash';
import * as actions from '../../Global/actionTypes'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
const RunTestsComponent = () => {

  const { state: { allTests }, dispatch } = useContext(MainContainerContext);

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      fontSize: '30'
    },
    playButton: {
      color: 'green',
      fontSize: '30',
    },
    addButton: {
      color: 'red',
      fontSize: '30',
    },
  }

  const runSingleTest = async (url, methodType, bodyInput) => {
    console.log("INside running test: URL :: ", url)
    console.log("INside running test: METHOD :: ", methodType)
    console.log("INside running test: BODY :: ", bodyInput)

    let retData;

    if (methodType === 'PUT' || methodType === 'POST') {

      fetch(`${url}`, {
        method: `${methodType}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bodyInput
        }),
      })
        .then(data => {
          return data.json();
        })
        .then(data => {
          console.log(data)
          retData = data.response;
          // dispatch({
          //   type: actions.UPDATE_TAB_INFO,
          //   payload: {
          //     //link: 'http://localhost:3001/test/get',
          //     link: `${url}`,
          //     method: methodType,
          //   }
          // })

          // dispatch({
          //   type: actions.STORE_RESPONSE,
          //   payload: data
          // })
        })
        .catch(error => console.error('Error:', error))
    } else if (methodType === 'DELETE') {
      fetch(`${url}`, {
        method: `${methodType}`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(data => {
          return data.json();
        })
        .then(data => {
          console.log(data)
          retData = data.response;
          // dispatch({
          //   type: actions.UPDATE_TAB_INFO,
          //   payload: {
          //     //link: 'http://localhost:3001/test/get',
          //     link: `${url}`,
          //     method: methodType,
          //   }
          // })

          // dispatch({
          //   type: actions.STORE_RESPONSE,
          //   payload: data
          // })
        })
        .catch(error => console.error('Error:', error))
    } else if (methodType === 'GET') {

      await fetch(url)
        .then(data => {
          return data.json();
        })
        .then(data => {
          console.log("GET DATA: ", data.response)
          retData = data.response;
          // dispatch({
          //   type: actions.UPDATE_TAB_INFO,
          //   payload: {
          //     link: url,
          //     method: methodType,
          //   }
          // })

          // dispatch({
          //   type: actions.STORE_RESPONSE,
          //   payload: data
          // })
        })
        .catch(error => console.error('Error:', error))
    }

    return retData;
  };

  const runTests = async () => {
    console.log("Running Tests...:", allTests)

    for (let i = 0; i < allTests.length; i++) {
      let res = await runSingleTest(allTests[i].url, allTests[i].method, allTests[i].body)
      console.log("DEBUG :: Response => ", res)
      console.log("DEBUG :: ExpectedResponse => ", allTests[i].expectedResponse)

      let passed = lodash.isEqual(res, allTests[i].expectedResponse)

      dispatch({
        type: actions.STORE_TEST_RESULT,
        payload: {
          testIdx: i,
          testResult: passed
        }
      })

      allTests[i].receivedResponse = res;

      if (passed) {
        console.log("TEST PASSED!")
        allTests[i].status = 1
      } else {
        console.log("TEST FAILED!")
        allTests[i].status = 0
      }
    }

    // 

  }

  return (
    <PlayArrowIcon style={styles.playButton} onClick={runTests}>
      Run Tests Component
    </PlayArrowIcon>
  )
}

export default RunTestsComponent;