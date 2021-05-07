import { useContext } from 'react'; 
import './App.css';
import { AppContext } from './Global/context/AppContext';
import * as actions from './Global/actionTypes';

function App() {
  console.log('APP')
  const { state: { currentWindow }, dispatch } = useContext(AppContext);

  const changeWindow = () => {
    const newWindow = Math.floor(Math.random() * 100)
    console.log(newWindow)
    dispatch({ type: actions.CHANGE_WINDOW, payload: newWindow})
  }

  return (
    <div className="App" onClick={changeWindow}>
      {`CURRENT WINDOW: ${currentWindow}`}
    </div>
  );
}

export default App;
