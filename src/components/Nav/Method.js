import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    background: '#383838',
  },
  cssLabel: {
    color: '#aaaaaa',
  },
  white: {
    color: '#000000'
  },
}));



export default function Method(props) {


  const classes = useStyles();


  const setMethodType = props.value.setMethodType

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="method">Method</InputLabel>
        <Select
          className={classes.cssLabel}
          native
          onChange={(e) => setMethodType(e.target.value)}
          outlined={classes.cssLabel}
          label="method"
          classes={{
            root: classes.root,
            icon: classes.cssLabel,
          }}
          
        >
          <option value='GET'>GET</option>
          <option value='PUT'>PUT</option>
          <option value='POST'>POST</option>
          <option value='DELETE'>DELETE</option>
        </Select>
      </FormControl>
    </div>
  )
}
