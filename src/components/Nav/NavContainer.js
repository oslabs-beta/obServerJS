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
    height: '5.5rem',
    display: 'grid',
    gridArea: 'nav',

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

  return (
    <div>
      <AppBar position="static" style={styles.AppBar}>

        <Toolbar component='form' noValidate autoComplete="off" variant="dense">

          <IconButton edge="start" className={classes.Icon} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>


          <Url style={classes.Url} />

          <Method style={classes.Icon} />

          <Body />

          <SendButton variant="contained" color="primary">
            Send
              </SendButton>

          <Login />

          <Signup />

          < AccountCircleIcon fontSize="large" />



        </Toolbar>

      </AppBar>
    </div>
  );
}