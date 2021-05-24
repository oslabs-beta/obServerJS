import React from "react";
import Signup from './Signup';
import Url from './Url';
import Login from './Login';
import Method from './Method';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Body from './Body';


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
    backgroundColor: '#097bed',
    borderColor: '#0063cc',
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
  }
}));



export default function NavContainer() {
  const classes = useStyles();

  const [url, setUrl] = React.useState('');
  const [methodType, setMethodType] = React.useState('GET');
  const [bodyInput, setBodyInput] = React.useState();


  const handleSignup = async (e) => {
    e.preventDefault();
    console.log('Line84: url:', url, 'method:', methodType, 'body', bodyInput)

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

        })
        .catch(error => console.error('Error:', error))
    }
  };

  return (

    <AppBar position="static" style={styles.AppBar}>

      <Toolbar style={styles.Toolbar} component='form' noValidate autoComplete="off" variant="dense" onSubmit={handleSignup}>

        <IconButton edge="start" className={classes.Icon} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Url value={{ setUrl }} style={classes.Url} />

        <Method value={{ setMethodType }} style={classes.Icon} />

        <Body value={{ setBodyInput, bodyInput }} />

        <SendButton type='submit' variant="contained" color="primary">
          Send
        </SendButton>

        <Login style={styles.Login} />

        <Signup />

        < AccountCircleIcon fontSize="large" />



      </Toolbar>

    </AppBar>

  );
}