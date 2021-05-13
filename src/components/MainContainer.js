import React from 'react'
import {
  Container,
} from '@material-ui/core'
import MainContainerProvider from '../Global/context/MainContainerContext';
import TabContainer from './Tab/TabContainer';
import SidebarContainer from './Sidebar/SidebarContainer';
import TreeStruct from './Windows/Tree/Tree'

const styles = {
  container: {
    height: '90vh',
    minHeight: '600px',
    maxHeight: '800px',
    width: '100vw',
    border: '1px solid purple',
    display: 'grid',
    gridTemplateRows: 'auto 45px repeat(5, auto)',
    gridTemplateColumns: '100px repeat(7, auto)',
    gridTemplateAreas: `
      "nav nav nav nav nav nav nav nav"
      "sidebar tabs tabs tabs tabs tabs tabs tabs"
      "sidebar windows windows windows windows windows windows windows"
      "sidebar windows windows windows windows windows windows windows"
      "sidebar windows windows windows windows windows windows windows"
      "sidebar windows windows windows windows windows windows windows"
      "sidebar windows windows windows windows windows windows windows"
    `,
    padding: 0,
  }
}

const MainContainer = () => (
  <MainContainerProvider>
    <Container style={styles.container}>
      <SidebarContainer />
      <TabContainer />
      <TreeStruct />
    </Container>
  </MainContainerProvider>
)

export default MainContainer
