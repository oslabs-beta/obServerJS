import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const top = -65;
const left = 2;

const styles = {
  root: {
    background: '#383838',
    color: '#aaaaaa',
    height: 55,
    width: 160,
  },
  paper: {
    position: 'absolute',
    width: 400,
    color: '#ffffff',
    backgroundColor: '#aaaaaa',
    border: '2px solid #aaaaaa',
  },
  Modal: {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-10, -10)`,
  },
  Content: {
    width: '25rem'
  },
  BodyInput: {
    width: '24rem'
  }
};


const useStyles = makeStyles(styles);


export default function ExpectedResponse(props) {
  const [open, setOpen] = React.useState(false);

  const setExpectedResponse = props.value.setExpectedResponse;
  const expectedResponse = props.value.expectedResponse;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" className={classes.root} onClick={handleClickOpen} endIcon={<AddIcon />}>
        ExpectedResponse
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" style={styles.Modal}>
        <DialogTitle id="form-dialog-title">Add Your Expected Response Body</DialogTitle>
        <DialogContent style={styles.Content}>

          <TextField
            style={styles.bodyInput}
            id="outlined-multiline-static"
            label="Expected Response"
            multiline
            rows={5}
            onChange={(e) => setExpectedResponse(e.target.value)}
            variant="outlined"
            value={expectedResponse}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}