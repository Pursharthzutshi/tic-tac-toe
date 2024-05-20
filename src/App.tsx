import React from 'react';
import './App.css';
// import TicTacToe from "../src/components/tic-tae-toe";
// import AITicTacToe from '../src/components/ai-tic-tac-toe';
import { Board } from './components/Board';

function App() {
  return (
    <div className="App">
      <h2>Game</h2>
      {/* <TicTacToe/> */}
      <Board/>
    </div>
  );
}

export default App;
