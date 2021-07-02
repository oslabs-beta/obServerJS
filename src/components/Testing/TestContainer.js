import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { MainContainerContext } from '../../Global/context/MainContainerContext';
// import Tab from './Tab';
import * as actions from '../../Global/actionTypes';

import TestComponent from './TestComponent'
import TestMenuBar from './TestMenuBar';

const styles = {
  container: {
    gridArea: 'windows',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 0,
    margin: 0,
    background: '#1e2125',
  },
  addTab: {
    width: '5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white',
    border: '1px solid grey',
    borderRadius: 0,
    background: '#1e2125',
    margin: 0,
    padding: 0,
  },
  button: {
    color: '#aaaaaa',
  }
}

const TestContainer = () => {
  const { state: { allTests }, dispatch } = useContext(MainContainerContext);

  let tests = []
  allTests.map((el, idx) => {
    {
      tests.push(<div>
        URL: {el.url}
        Method: {el.method}
        {/*TODO: FIX BODY DISPLAY
         Body: {el.body} */}
      </div>)
    }
  })

  return (
    <Container style={styles.container}>

      <TestMenuBar></TestMenuBar>

      {
        tests
      }

    </Container >
  )
}

export default TestContainer
