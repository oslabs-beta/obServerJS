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
  currentRoute: {
    method: 'GET',
    routeName: '/user/create',
    middleware: [
      {
        name: 'twoPlusTwo',
        code: 'const twoPlusTwo = () => 2 + 2', 
        status: 'passed',
        toggled: false,
        response: {
          value: 4,
        }, 
        variables: [
        ]
      }, 
      {
        name: 'threePlusThree',
        code: 'const threePlusThree = () => 3 + 3', 
        status: 'error',
        toggled: true,
        response: {
          value: 6,
        }, 
        variables: [
          {}
        ]
      }, 
      {
        name: 'fourPlusFour',
        code: 'const fourPlusFour = () => 4 + 4', 
        status: 'skipped', 
        toggled: false,
        response: {
          value: 4,
          value1: 8, 
          value2: 6, 
          value3: 10, 
          value4: 12
        }, 
        variables: [
          {
            userRouter: 'blue',
            user: 'Ashley', 
            faveColor: 'blue'
          }
        ]
      }
    ], 
    activeMiddleware:  {
      name: 'twoPlusTwo',
      code: 'const twoPlusFour = () => 2 + 2', 
      status: 'passed',
      toggled: false,
      response: {
        value: 4,
        value1: 8, 
        value2: 6, 
        value3: 10, 
        value4: 12
      }, 
      variables: [
        {
          userRouter: 'blue',
          user: 'Ashley', 
          faveColor: 'blue'
        }
      ]
    },
  }
}

export const MainContainerContext = React.createContext();

const MainContainerReducer = (state, action) => {
  switch(action.type) {
    case actions.CLOSE_TAB: 
      return state
    case actions.NEW_TAB: 
      return state
    case actions.CHANGE_ACTIVE_TAB: 
      const newTabs = state.allTabs;
      newTabs.forEach((tab) => {
        if (tab.tabOrder === action.payload) {
          tab.active = true
        } else {
          tab.active = false
        }
      })
      return { ...state, allTabs: newTabs }
    case actions.TOGGLE_MIDDLEWARE: 
      const { idx } = action.payload

      const newRoutes = state.currentRoute

      newRoutes.activeMiddleware = state.currentRoute.middleware[idx]

      // const currentToggleStatus = state.currentRoute.middleware[idx].toggled

      // let newRoutes = state.currentRoute

      // console.log('before update', newRoutes.middleware[idx].toggled)

      // newRoutes.middleware[idx].toggled = !currentToggleStatus

      // console.log('after update', newRoutes.middleware[idx].toggled)
      return {...state, currentRoute: newRoutes}
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