import React from 'react';
import './App.css';
import PlayerRanking from './components/PlayerRanking';
import PlayerCards from './components/PlayerCards';
import Toggle from './components/Toggle';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [isStateful, setIsStateful] = useLocalStorage('isStateful', false);
  return (
    <div className="App" data-testid='App-div'>
      <div data-testid='PlayerComponent'>
        {
          isStateful ? <PlayerRanking /> : <PlayerCards />
        }
      </div>
      <Toggle />
    </div>
  );
}

export default App;
