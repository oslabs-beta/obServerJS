import React, { useContext } from 'react'
import {
  Container,
} from '@material-ui/core'
import TabContainer from './Tab/TabContainer';
import SidebarContainer from './Sidebar/SidebarContainer';
import NavContainer from './Nav/NavContainer'
import Tree from './Tree/Tree'
import ResponseContainer from './Response/ResponseContainer'
import { MainContainerContext } from '../Global/context/MainContainerContext';

const styles = {
  container: {
    padding: 0,
    margin: 0,
    height: '100vh',
    minHeight: '600px',
    width: '100%',
    overflow: 'hidden',
    maxWidth: '100%',
    background: '#383838',
    display: 'grid',
    gridTemplateRows: '1fr 45px repeat(5, 1fr)',
    gridTemplateColumns: '100px repeat(7, 1fr)',
    gridTemplateAreas: `
      "nav nav nav nav nav nav nav nav"
      "sidebar tabs tabs tabs tabs tabs tabs tabs"
      "sidebar windows windows windows windows windows windows windows"
      "sidebar windows windows windows windows windows windows windows"
      "sidebar windows windows windows windows windows windows windows"
      "sidebar windows windows windows windows windows windows windows"
      "sidebar windows windows windows windows windows windows windows"
    `,

  }
}

const MainContainer = () => {
  const { state: { sidebarSelection } } = useContext(MainContainerContext)

  return (
    <Container style={styles.container}>
      <NavContainer />
      <SidebarContainer />
      <TabContainer />
      {sidebarSelection === 'Response' 
      ?  <ResponseContainer /> 
      : <Tree />}
    </Container>
  )
}

export default MainContainer
