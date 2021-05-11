import React, { useReducer } from 'react';
import * as actions from '../actionTypes';

const initialState = {
  allTabs: [
    {
      link: 'http://localhost:3000', 
      method: 'POST',
      active: false,
      tabOrder: 0,
    }, 
    {
      link: 'http://localhost:8080', 
      method: 'GET', 
      active: true,
      tabOrder: 1,
    }
  ], // all available tabs
  sidebarSelections: [], // i.e. Collections, tree, request, response, etc. (min 1, max2)
}

export const MainContainerContext = React.createContext();

const MainContainerReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.CLOSE_TAB: 
      return state
    case actions.NEW_TAB: 
      return state
    case actions.CHANGE_ACTIVE_TAB: 
      console.log('AAL TABS', state.allTabs, state)
      const newTabs = state.allTabs;
      newTabs.forEach((tab) => {
        if (tab.tabOrder === action.payload) {
          tab.active = true
        } else {
          tab.active = false
        }
      })
      return { ...state, allTabs: newTabs }
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