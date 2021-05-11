import React, { useContext } from 'react'
import MainContainerProvider, { MainContainerContext }  from '../Global/context/MainContainerContext';

const MainContainer = () => {
  const { state: {}, dispatch } = useContext(MainContainerContext)
  return (
    <MainContainerProvider>
      <div></div>
    </MainContainerProvider>
  )
}

export default MainContainer
