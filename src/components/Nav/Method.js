import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  requestType: {
    background: '#383838',
    color: '#aaaaaa',
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const requestTypes = [
  {
    value: 'GET',
    label: 'GET',
  },
  {
    value: 'POST',
    label: 'POST',
  },
  {
    value: 'PUT',
    label: 'PUT',
  },
  {
    value: 'DELETE',
    label: 'DELETE',
  },
];

export default function Method() {
  const classes = useStyles();
  const [request, setRequest] = useState('GET');

  const handleChange = (event) => {
    setRequest(event.target.value);
  };


  return (
    <div>
      <TextField style={styles.requestType}
        id="outlined-select-currency"
        select
        label="Select"
        value={request}
        onChange={handleChange}
        variant="outlined"
      >
        {requestTypes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  )
}
