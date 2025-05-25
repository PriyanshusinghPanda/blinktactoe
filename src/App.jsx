import { useState } from "react";
import Gameboard from "./components/Gameboard";
import StatusBar from "./components/StatusBar";
import { checkWinner } from "./gametype/offline/gameUtils";

import "./App.css";

function App() {
  const [mode, setMode] = useState(null); // "offline" | "online" | null
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const [firstPersonMoves, setFirstPersonMoves] = useState([]);
  const [secondPersonMoves, setSecondPersonMoves] = useState([]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setFirstPersonMoves([]);
    setSecondPersonMoves([]);
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    const currentPlayer = isXNext ? "X" : "O";

    newBoard[index] = currentPlayer;

    if (isXNext) {
      let updatedMoves = [...firstPersonMoves, index];
      if (updatedMoves.length > 3) {
        const oldestMove = updatedMoves[0];
        newBoard[oldestMove] = null;
        updatedMoves = updatedMoves.slice(1); // creates new array without first element
      }
      setFirstPersonMoves(updatedMoves);
    } else {
      let updatedMoves = [...secondPersonMoves, index];
      if (updatedMoves.length > 3) {
        const oldestMove = updatedMoves[0];
        newBoard[oldestMove] = null;
        updatedMoves = updatedMoves.slice(1); // creates new array without first element
      }
      setSecondPersonMoves(updatedMoves);
    }

    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (newBoard.every(Boolean)) {
      setWinner("Draw");
    } else {
      setIsXNext(!isXNext);
    }
  };

  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode);
  };

  const renderModeSelection = () => (
    <div className="mode-selection">
      <h2>Select Game Mode</h2>
      <button onClick={() => handleModeSelect("offline")}>Offline Mode</button>
      <button onClick={() => handleModeSelect("online")} disabled>
        Online Mode (Coming Soon)
      </button>
    </div>
  );

  if (!mode) return renderModeSelection();

  if (mode === "offline") {
    return (
      <div className="app">
        <h1>Tic Tac Toe</h1>
        <StatusBar isXNext={isXNext} winner={winner} />
        <Gameboard board={board} onClick={handleClick} />
        <button onClick={resetGame} className="reset-button">
          Restart Game
        </button>
        <button
          onClick={() => {
            setMode(null);
            setBoard(Array(9).fill(null));
            setIsXNext(true);
            setWinner(null);
            setFirstPersonMoves([]);
            setSecondPersonMoves([]);
          }}
          className="back-button"
        >
          Back to Mode Selection
        </button>
      </div>
    );
  }

  if (mode === "online") {
    return (
      <div className="app">
        <h1>Online Mode</h1>
        <p>Coming soon!</p>
        <button onClick={() => setMode(null)} className="back-button">
          Back
        </button>
      </div>
    );
  }
}

export default App;
