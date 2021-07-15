import RunTestsComponent from "./RunTestsComponent"
import AddTestComponent from "./AddTestComponent"
import { Container } from '@material-ui/core';

const styles = {
  container: {
    gridArea: 'tabs',
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

const TestMenuBar = () => {

  return (
    <Container style={styles.container}>
      <RunTestsComponent></RunTestsComponent>
      <AddTestComponent></AddTestComponent>
    </Container>
  )

}

export default TestMenuBar