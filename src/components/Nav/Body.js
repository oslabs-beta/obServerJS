import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    background: '#383838',
    color: '#aaaaaa',
    height: 55,
    width: 160,
  }
};

const useStyles = makeStyles(styles);

export default function Body() {
  const classes = useStyles();

  return (
    <div>
      <Button onClick={() => alert('Body')}
        color="primary"
        className={classes.root}
        endIcon={<AddIcon />}
      >Body</Button>
    </div>
  )
}
