import React, { useReducer } from 'react';
import * as actions from '../actionTypes';

const initialState = {
  currentTabIdx: 0,
  // all tests
  allTests: [
    // {
    //   url: 'localhost:3000/test', 
    //   method: 'PUT', 
    //   status: 1,
    //   body: '{"test":"test"}',
    //   condition: 'To Equal', 
    //   expectedResponse: '{"test":"test"}',
    //   receivedResponse: '{"test":"test"}',
    // }, 
    // {
    //   url: 'localhost:3000/test', 
    //   method: 'PUT', 
    //   status: 0,
    //   body: '{"test":"test"}',
    //   condition: 'To Equal', 
    //   expectedResponse: '{"test":"test"}',
    //   receivedResponse: '{"test": null}',
    // }, 
    // {
    //   url: 'localhost:3000/test', 
    //   method: 'PUT', 
    //   status: 0,
    //   body: '{"test":"test"}',
    //   condition: 'To Equal', 
    //   expectedResponse: '{"test":"test"}',
    //   receivedResponse: '{"test": null}',
    // }, 
    // {
    //   url: 'localhost:3000/test', 
    //   method: 'PUT', 
    //   status: 1,
    //   body: '{"test":"test"}',
    //   condition: 'To Equal', 
    //   expectedResponse: '{"test":"test"}',
    //   receivedResponse: '{"test":"test"}',
    // }, 
  ],
  // all open tabs
  allTabs: [
    // {
    //   link: '',
    //   route: '',
    //   method: '',
    //   active: false,
    //   body: 'test',
    //   response: {},
    //   tabOrder: 0,
    //   currentMiddlewareIdx: 0,
    //   middleware: [{}],
    //   tree: {}
    // }
  ],
  sidebarSelection: 'Testing', // i.e. Collections, tree, request, response, etc. (min 1, max2)

}

export const MainContainerContext = React.createContext();

const MainContainerReducer = (state, action) => {
  switch (action.type) {
    case actions.STORE_TEST_RESULT:

      let newAllTestsRes = state.allTests

      newAllTestsRes[action.payload.testIdx].passed = action.payload.testResult

      console.log("DEBUG :: NEW ALL TESTS => ", newAllTestsRes)
      return {
        ...state,
        allTests: newAllTestsRes
      }

    case actions.ADD_TEST:

      let newAllTests = state.allTests

      newAllTests.push({
        url: action.payload.url,
        method: action.payload.method,
        body: action.payload.body,
        expectedResponse: action.payload.expectedResponse,
        condition: action.payload.condition,
      })

      return {
        ...state,
        allTests: newAllTests
      }

    case actions.STORE_RESPONSE:
      console.log("INSIDE REDUCER: ", action.payload)

      let responseTabs = state.allTabs

      responseTabs[state.currentTabIdx].middleware = action.payload.observer.stackLayers;
      responseTabs[state.currentTabIdx].tree = action.payload.observer.tree;
      responseTabs[state.currentTabIdx].response = action.payload.response;

      console.log('AFTER UPDATE', responseTabs[state.currentTabIdx])

      return {
        ...state,
        allTabs: responseTabs
      };
    case actions.CLOSE_TAB:
      const tab = action.payload;
      const currentState = [];
      let newTabIdx

      if (action.payload === state.allTabs.length - 1) {
        if (state.allTabs.length - 1 < 0) newTabIdx = 0
        else {
          newTabIdx = state.allTabs.length - 1 - 1
        }
      } else {
        newTabIdx = action.payload
      }

      const reSort = () => {
        for (let key of state.allTabs) {
          if (key.tabOrder !== tab) {
            if (key.tabOrder > tab) {
              key.tabOrder--
            }
            currentState.push(key)
          }
        }
      }
      reSort();

      return { ...state, allTabs: currentState, currentTabIdx: newTabIdx }

    case actions.NEW_TAB:
      const data = action.payload
      const tabs = state.allTabs
      tabs.forEach((tab) => {
        tab.active = false
      })
      tabs.push(data)
      //How do I add a new object to the allTabs Array?
      console.log('adding a tab')
      return { ...state, allTabs: tabs, currentTabIdx: action.payload.tabOrder }

    case actions.CHANGE_ACTIVE_TAB:

      return { ...state, currentTabIdx: action.payload }

    case actions.TOGGLE_MIDDLEWARE:
      const { idx } = action.payload

      const allTabs = state.allTabs
      allTabs[state.currentTabIdx].currentMiddlewareIdx = idx

      return { ...state, allTabs }

    case actions.CHANGE_WINDOW:

      return { ...state, sidebarSelection: action.payload }

    case actions.UPDATE_TAB_INFO:
      const updatedTabs = state.allTabs

      updatedTabs[state.currentTabIdx].link = action.payload.link
      updatedTabs[state.currentTabIdx].method = action.payload.method

      console.log('udpated tabs', updatedTabs[2])

      return { ...state, allTabs: updatedTabs }

    default:
      return state
  }
}

// Function that gets exposed when context is used inside of the application
const MainContainerProvider = ({ children }) => {
  // useReducer exposes the state and dispatch functions
  const [state, dispatch] = useReducer(MainContainerReducer, initialState)
  return (
    <MainContainerContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContainerContext.Provider>
  )
}

export default MainContainerProvider