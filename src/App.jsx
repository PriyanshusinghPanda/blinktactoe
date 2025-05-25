import { useState } from "react";
import Gameboard from "./components/Gameboard";
import StatusBar from "./components/StatusBar";
import { checkWinner } from "./gametype/offline/gameUtils";

import "./App.css";

function App() {
  const [mode, setMode] = useState(null);
  const [player1Category, setPlayer1Category] = useState(null);
  const [player2Category, setPlayer2Category] = useState(null);
  const [player1Emoji, setPlayer1Emoji] = useState(null);
  const [player2Emoji, setPlayer2Emoji] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const [firstPersonMoves, setFirstPersonMoves] = useState([]);
  const [secondPersonMoves, setSecondPersonMoves] = useState([]);

  const emojiCategories = {
    Animals: ["🐶", "🐱", "🐵", "🐰"],
    Food: ["🍕", "🍟", "🍔", "🍩"],
    Sports: ["⚽", "🏀", "🏈", "🎾"],
  };

  const getRandomEmoji = (category) => {
  const emojis = emojiCategories[category];
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
};

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
    const currentPlayer = isXNext ? player1Emoji : player2Emoji;

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
    if (!player1Category || !player2Category) {
      return (
        <div className="category-selection">
  <h2>Player 1: Choose your category</h2>
  {Object.keys(emojiCategories).map((category) => (
    <button
      key={category}
      onClick={() => {
        setPlayer1Category(category);
        setPlayer1Emoji(getRandomEmoji(category));
      }}
    >
      {category}
    </button>
  ))}

  {player1Category && (
    <>
      <h2>Player 2: Choose your category</h2>
      {Object.keys(emojiCategories).map((category) => (
        <button
          key={category}
          disabled={category === player1Category}
          onClick={() => {
            setPlayer2Category(category);
            setPlayer2Emoji(getRandomEmoji(category));
          }}
        >
          {category}
        </button>
      ))}
    </>
  )}
</div>

      );
    } else {
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
