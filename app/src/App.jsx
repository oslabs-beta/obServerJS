import React from 'react';
// import App from './App.css';
import MainContainer from './components/MainContainer';
import MainContainerProvider from './Global/context/MainContainerContext';

function App() {
  return (
    <div className="App">
      <MainContainerProvider>
        <MainContainer />
      </MainContainerProvider>
    </div>
  );
}

export default App;
