import { useState } from 'react'
import Gameboard from "./components/Gameboard";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };
  const handleClick = (index) => {
    console.log("Clicked index:", index);
  };
  
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Gameboard board={board} onClick={handleClick} />
      <button onClick={resetGame} className="reset-button">
        Restart Game
      </button>
    </div>
  );
}

export default App;
