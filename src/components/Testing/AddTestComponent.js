import { MainContainerContext } from '../../Global/context/MainContainerContext';
import * as actions from '../../Global/actionTypes';
import React, { useContext } from 'react';
import Url from '../Nav/Url';
import Method from '../Nav/Method';
import Body from '../Nav/Body';
import ExpectedReponse from './ExpectedResponse';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Icon: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  Url: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    logo: {

      width: '100%',
      margin: '0px 0'
    }
  }
}));

const AddTestComponent = () => {
  const classes = useStyles();

  const { state: { allTests }, dispatch } = useContext(MainContainerContext);

  const [url, setUrl] = React.useState('');
  const [methodType, setMethodType] = React.useState('GET');
  const [bodyInput, setBodyInput] = React.useState();
  const [expectedResponse, setExpectedResponse] = React.useState();

  const addTest = () => {
    console.log("Adding Test...")
    dispatch({
      type: actions.ADD_TEST,
      payload: {
        url: url,
        method: methodType,
        body: bodyInput,
        expectedResponse: expectedResponse
      }
    })
  }

  return (
    <div>
      <Url value={{ setUrl }} style={classes.Url} />

      <Method value={{ setMethodType }} style={classes.Icon} />

      <Body value={{ setBodyInput, bodyInput }} />

      <ExpectedReponse value={{ setExpectedResponse, expectedResponse }} />

      <button onClick={addTest}>
        Add Test Component
      </button>
    </div>
  )
}

export default AddTestComponent;