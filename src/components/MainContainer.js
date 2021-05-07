import React from 'react'
import MainContainerProvider from '../Global/context/MainContainerContext';

const MainContainer = () => {
  return (
    <MainContainerProvider>
      <div></div>
    </MainContainerProvider>
  )
}

export default MainContainer
