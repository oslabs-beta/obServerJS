import React from 'react';
import * as actions from '../actionTypes';

const initialState = {
  currentWindow: 'Dashboard',
  
}

const MainContainerContext = React.createContext(initialState);

const MainContainerReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.CLOSE_TAB: 
      return state
    case actions.OPEN_TAB: 
      return state
    default: 
      return state    
  }
}

const MainContainerProvider = ({ children }) => (
  <MainContainerContext.Provider value={{MainContainerContext, MainContainerReducer}}>
    {children}
  </MainContainerContext.Provider>
)

export default MainContainerProvider