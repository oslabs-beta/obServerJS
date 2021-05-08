import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const styles = {
  urlInput: {
    background: '#383838',
    color: '#aaaaaa',
  }
}


export default function Url() {
  const classes = useStyles();

  return (
    <div>
      <TextField style={styles.urlInput} id="outlined-basic" label="Request URL" variant="outlined" />
    </div>
  )
}
