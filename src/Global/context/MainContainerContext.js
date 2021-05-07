import React, { useReducer } from 'react';
import * as actions from '../actionTypes';

const initialState = {
  currentTabs: [],
  
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

const MainContainerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainContainerReducer, initialState)
  return (
    <MainContainerContext.Provider value={{state, dispatch}}>
    {children}
  </MainContainerContext.Provider>
  )
}

export default MainContainerProvider