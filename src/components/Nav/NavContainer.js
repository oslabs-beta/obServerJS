import React, { useContext } from "react";
import Signup from './Signup';
import Url from './Url';
import Login from './Login';
import Method from './Method';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Body from './Body';
import Logo from './logo3.png';
import { MainContainerContext } from '../../Global/context/MainContainerContext';
import * as actions from '../../Global/actionTypes';

const styles = {
  AppBar: {
    background: '#333333',
    display: 'grid',
    gridArea: 'nav',
  },
  Toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    color: '#8cd8be'
  }
}


const SendButton = withStyles({
  root: {
    boxShadow: '12px solid white',
    fontSize: 18,
    height: 50,
    width: 120,
    padding: '6px 12px',
    border: '1px solid',
    borderRadius: 0,
    lineHeight: 1.5,
    backgroundColor: '#383838',
    borderColor: '#8cd8be',
    fontFamily:
      'Rubik-Medium'
    ,
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
  },
})(Button);

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



export default function NavContainer() {
  const classes = useStyles();

  const [url, setUrl] = React.useState('');
  const [methodType, setMethodType] = React.useState('GET');
  const [bodyInput, setBodyInput] = React.useState();

  const { dispatch } = useContext(MainContainerContext);

  const handleSignup = async (e) => {
    e.preventDefault();

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

        })
        .catch(error => console.error('Error:', error))
    } else if (methodType === 'GET') {

      fetch(`${url}`)
        .then(data => {
          return data.json();
        })
        .then(data => {
          console.log(data)
          dispatch({
            type: 'STORE_RESPONSE',//actions.STORE_RESPONSE,
            payload: data
          })
        })
        .catch(error => console.error('Error:', error))
    }
  };

  return (

    <AppBar position="static" style={styles.AppBar}>

      <Toolbar style={styles.Toolbar} component='form' noValidate autoComplete="off" variant="dense" onSubmit={handleSignup}>

        <img src={Logo} alt='logo' style={classes.logo} />

        <Url value={{ setUrl }} style={classes.Url} />

        <Method value={{ setMethodType }} style={classes.Icon} />

        <Body value={{ setBodyInput, bodyInput }} />

        <SendButton type='submit' variant="contained" style={styles.button}>
          Send
        </SendButton>

        <Login style={styles.Login} />

        <Signup />

        < AccountCircleIcon fontSize="large" />



      </Toolbar>

    </AppBar>

  );
}