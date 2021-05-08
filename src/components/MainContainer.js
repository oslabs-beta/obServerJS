import React, { useContext } from 'react'
import {
  Container,
} from '@material-ui/core'
import MainContainerProvider, { MainContainerContext }  from '../Global/context/MainContainerContext';
import SidebarContainer from './Sidebar/SidebarContainer';
import NavContainer from './Nav/NavContainer';

const styles = {
  container: {
    height: '90vh',
    minHeight: '600px',
    maxHeight: '800px',
    width: '100vw',
    border: '1px solid purple',
    display: 'grid', 
    gridTemplateRows: 'repeat(8, 100/8)',
    gridTemplateColumns: 'repeat(6, 100/6)',
    gridTemplateAreas: `
      "nav nav nav nav nav nav nav nav"
      "sidebar tabs tabs tabs tabs tabs tabs tabs"
      "sidebar windows windows windows windows windows windows windows"
      "sidebar windows windows windows windows windows windows windows"
      "sidebar windows windows windows windows windows windows windows"
      "sidebar windows windows windows windows windows windows windows"
    `,
    padding: 0,
  }
}

const MainContainer = () => {
  // const { state, dispatch } = useContext(MainContainerContext)
  return (
    <MainContainerProvider>
      <Container style={styles.container}>
        <NavContainer />
        <SidebarContainer />
      </Container>
    </MainContainerProvider>
  )
}

export default MainContainer
