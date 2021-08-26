import './App.css';
import GlobalSpinnerContextProvider from './context/GlobalSpinnerContext'
import GlobalSpinner from './components/GlobalSpinner/GlobalSpinner';
import RandomComments from './components/RandomComments';

function App() {
  return (
    <GlobalSpinnerContextProvider>
      <div className="App">
        <GlobalSpinner />
        <RandomComments />
      </div>
    </GlobalSpinnerContextProvider>
  );
}

export default App;
