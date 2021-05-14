import React, { useState } from 'react'
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
}));





export default function Method() {


  const classes = useStyles();
  const [state, setState] = useState({
    method: '',
  });

  const handleChange = (event) => {
    const method = event.target.method;
    setState({
      ...state,
      [method]: event.target.value,
    });
  };



  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="method">Method</InputLabel>
        <Select
          className={classes.cssLabel}
          native
          value={state.method}
          onChange={handleChange}
          label="method"
          classes={{
            root: classes.root,
            icon: classes.cssLabel,
          }}
          inputProps={{
            method: '',
            id: 'method',
          }}
        >
          <option value='get'>GET</option>
          <option value='put'>PUT</option>
          <option value='post'>POST</option>
          <option value='delete'>DELETE</option>
        </Select>
      </FormControl>
    </div>
  )
}
