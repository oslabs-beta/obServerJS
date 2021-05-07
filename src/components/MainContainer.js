import React, { useContext } from 'react'
import MainContainerProvider, { MainContainerContext }  from '../Global/context/MainContainerContext';
import Sidebar from './Sidebar/SidebarContainer'

const MainContainer = () => {
  const { state: {}, dispatch } = useContext(MainContainerContext)
  return (
    <MainContainerProvider>
      <div></div>
      <Sidebar />
    </MainContainerProvider>
  )
}

export default MainContainer
