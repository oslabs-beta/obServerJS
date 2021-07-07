import { MainContainerContext } from '../../Global/context/MainContainerContext';
import * as actions from '../../Global/actionTypes';
import React, { useContext } from 'react';

const AddTestComponent = () => {

  const { state: { allTests }, dispatch } = useContext(MainContainerContext);

  const addTest = () => {
    console.log("Adding Test...")
    dispatch({
      type: actions.ADD_TEST,
      payload: {
        url: "http://localhost:3001/test/get",
        method: 'GET',
        body: {}
      }
    })
  }

  return (
    <button onClick={addTest}>
      Add Test Component
    </button>
  )
}

export default AddTestComponent;