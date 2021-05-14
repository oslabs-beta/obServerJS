import React from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';


const styles = {
  urlInput: {
    background: '#383838',
    color: '#ffffff',
    height: 55,
  }
}

const useStyles = makeStyles(styles);

export default function Url() {
  const classes = useStyles();
  return (
    <div>
      <Input className={classes.urlInput} id="outlined-basic" placeholder="Request URL" variant="outlined" />
    </div>
  )
}
