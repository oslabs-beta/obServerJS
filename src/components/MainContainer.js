import React from 'react'
import {
  Container,
} from '@material-ui/core'
import MainContainerProvider from '../Global/context/MainContainerContext';
import TabContainer from './Tab/TabContainer';
import SidebarContainer from './Sidebar/SidebarContainer';
import ResponseContainer from './Response/ResponseContainer'
import NavContainer from './Nav/NavContainer'

const styles = {
  container: {
    padding: 0,
    margin: 0,
    height: '100vh',
    minHeight: '600px',
    width: '100%',
    maxWidth: '100%',
    background: '#383838',
    display: 'grid',
    gridTemplateRows: '1fr 45px repeat(5, 1fr)',
    gridTemplateColumns: '100px repeat(7, 1fr)',
    gridTemplateAreas: `
      "sidebar nav nav nav nav nav nav nav"
      "sidebar tabs tabs tabs tabs tabs tabs tabs"
      "sidebar windows windows windows windows windows windows windows"
      "sidebar windows windows windows windows windows windows windows"
      "sidebar windows windows windows windows windows windows windows"
      "sidebar windows windows windows windows windows windows windows"
      "sidebar windows windows windows windows windows windows windows"
    `,

  }
}

const MainContainer = () => (
  <MainContainerProvider>
    <Container style={styles.container}>
      <NavContainer/>
      <SidebarContainer />
      <TabContainer />
      <ResponseContainer />
    </Container>
  </MainContainerProvider>
)

export default MainContainer
