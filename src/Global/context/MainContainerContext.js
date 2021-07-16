import React, { useReducer } from "react";
import * as actions from "../actionTypes";

const initialState = {
  // index of the current active tab
  currentTabIdx: 0,
  // all tests
  // TODO: put a test format for reference
  allTests: [],
  // all open tabs
  // TODO: put a tab format for reference
  allTabs: [],
  sidebarSelection: "Testing", // i.e. Collections, tree, request, response, etc. (min 1, max2)
};

export const MainContainerContext = React.createContext();

const MainContainerReducer = (state, action) => {
  switch (action.type) {
    // Store the test results into state and update their passed field
    case actions.STORE_TEST_RESULT:
      let newAllTestsRes = state.allTests;

      newAllTestsRes[action.payload.testIdx].passed = action.payload.testResult;

      return {
        ...state,
        allTests: newAllTestsRes,
      };

    // Add a request test to state
    case actions.ADD_TEST:
      let newAllTests = state.allTests;

      newAllTests.push({
        url: action.payload.url,
        method: action.payload.method,
        body: action.payload.body,
        expectedResponse: action.payload.expectedResponse,
        condition: action.payload.condition,
      });

      return {
        ...state,
        allTests: newAllTests,
      };

    // Store the response into state, including middleware chain, full app tree, and response body
    case actions.STORE_RESPONSE:
      let responseTabs = state.allTabs;

      responseTabs[state.currentTabIdx].middleware =
        action.payload.observer.stackLayers;
      responseTabs[state.currentTabIdx].tree = action.payload.observer.tree;
      responseTabs[state.currentTabIdx].response = action.payload.response;

      return {
        ...state,
        allTabs: responseTabs,
      };

    // Close tab action... this one is kind of tricky...
    case actions.CLOSE_TAB:
      const tab = action.payload;
      const currentState = [];
      let newTabIdx;

      // Update the current tab index in a very specific way...
      // Need to handle specific cases
      if (action.payload === state.allTabs.length - 1) {
        if (state.allTabs.length - 1 < 0) newTabIdx = 0;
        else {
          newTabIdx = state.allTabs.length - 1 - 1;
        }
      } else {
        newTabIdx = action.payload;
      }

      // We need to resort the new array with the updated tab order after removing one
      const reSort = () => {
        for (let key of state.allTabs) {
          if (key.tabOrder !== tab) {
            if (key.tabOrder > tab) {
              key.tabOrder--;
            }
            currentState.push(key);
          }
        }
      };
      reSort();

      return { ...state, allTabs: currentState, currentTabIdx: newTabIdx };

    // Add a new tab and make it the active one
    case actions.NEW_TAB:
      const data = action.payload;
      const tabs = state.allTabs;

      tabs.forEach((tab) => {
        tab.active = false;
      });

      tabs.push(data);

      return {
        ...state,
        allTabs: tabs,
        currentTabIdx: action.payload.tabOrder,
      };

    // Update the active tab
    case actions.CHANGE_ACTIVE_TAB:
      return { ...state, currentTabIdx: action.payload };

    // Update the active middleware function
    case actions.TOGGLE_MIDDLEWARE:
      const { idx } = action.payload;

      const allTabs = state.allTabs;
      allTabs[state.currentTabIdx].currentMiddlewareIdx = idx;

      return { ...state, allTabs };

    // Update sidebar window
    case actions.CHANGE_WINDOW:
      return { ...state, sidebarSelection: action.payload };

    // Update tab bar information
    case actions.UPDATE_TAB_INFO:
      const updatedTabs = state.allTabs;

      updatedTabs[state.currentTabIdx].link = action.payload.link;
      updatedTabs[state.currentTabIdx].method = action.payload.method;

      return { ...state, allTabs: updatedTabs };

    default:
      return state;
  }
};

// Function that gets exposed when context is used inside of the application
const MainContainerProvider = ({ children }) => {
  // useReducer exposes the state and dispatch functions
  const [state, dispatch] = useReducer(MainContainerReducer, initialState);
  return (
    <MainContainerContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContainerContext.Provider>
  );
};

export default MainContainerProvider;
