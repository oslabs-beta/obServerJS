import React, { useReducer } from 'react';
import * as actions from '../actionTypes';

const initialState = {
  allTabs: [], // all available tabs
  currentTab: null, // currently open tab 
  sidebarSelections: [], // i.e. Collections, tree, request, response, etc. (min 1, max2)
}

const MainContainerContext = React.createContext();

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

// Function that gets exposed when context is used inside of the application
const MainContainerProvider = ({ children }) => {
  // useReducer exposes the state and dispatch functions
  const [state, dispatch] = useReducer(MainContainerReducer, initialState)
  return (
    <MainContainerContext.Provider value={{state, dispatch}}>
    {children}
  </MainContainerContext.Provider>
  )
}

export default MainContainerProvider