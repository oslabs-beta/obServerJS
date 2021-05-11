import React, { useReducer } from 'react';
import * as actions from '../actionTypes';

const initialState = {
  currentWindow: 'Dashboard', // Current window view i.e. Dashboard, Performance Metrics, etc.
}

export const AppContext = React.createContext();

const AppReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.CHANGE_WINDOW: 
      return {...state, currentWindow: action.payload}
    default: 
      return state    
  }
}

// Function that gets exposed when context is used inside of the application 
const AppProvider = ({ children }) => {
 // useReducer exposes the state and dispatch functions
 const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider

