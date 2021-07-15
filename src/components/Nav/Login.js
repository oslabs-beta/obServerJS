import React from 'react'
import Button from '@material-ui/core/Button';


const styles = {
  button: {
    color: '#aaaaaa',
  },
}

export default function Login() {

  return (
    <div>
      <Button style={styles.button}>Login</Button>
    </div>
  )
}
