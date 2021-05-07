import React, { useReducer } from 'react';
import * as actions from '../actionTypes';

const initialState = {
  currentWindow: 'Dashboard',
}

export const AppContext = React.createContext(initialState);

const AppReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.CHANGE_WINDOW: 
      return {...state, currentWindow: action.payload}
    default: 
      return state    
  }
}

const AppProvider = ({ children }) => {
 const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider


/* GLOBAL STATE
  - current tab (1min 2 max)
  - current window ()

// COMPONENT-LEVEL STATE
  Sidebar 
    - current tabs open (1 min, 2 max)
    - help modal open 
    - settings modal open 
  Route Component 
    - route middleware open and expanded to the right 
  Variable Component
    - variables open and expanded to the right

    
    App
      Main Container
        Navigation Container
          URL/Route Address Component 
          Request Type Component
          Body Component
          (s)Login Component
          (s)Signup Component
        Sidebar Container - currentTabs, helpModal, settingsModal
          Help Component
          Settings Component
          *Other Buttons TBD...*
        Tab Container
          Tab Component
        Middleware Container
          Middleware Function Container
            Middleware Function Component
        Source Code Container
          Code Component
        Reponse Container
          Variable Component - 
          Response Object Component

*/

