import { useContext } from 'react'; 
import './App.css';
import { AppContext } from './Global/context/AppContext';
import * as actions from './Global/actionTypes';
import MainContainer from './components/MainContainer';

function App() {
  const { state: { currentWindow }, dispatch } = useContext(AppContext);

  // Function will change the current window text to a random number when the screen is clicked
  const changeWindow = () => {
    const newWindow = Math.floor(Math.random() * 100)
    console.log(newWindow)
    dispatch({ type: actions.CHANGE_WINDOW, payload: newWindow})
  }

  return (
    <div className="App" onClick={changeWindow}>
      {`CURRENT WINDOW: ${currentWindow}`}
      <MainContainer />
    </div>
  );
}

export default App;
