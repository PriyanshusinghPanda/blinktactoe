import React from 'react';

const StatusBar = ({ isXNext, winner }) => {
  let status;
  
  if (winner === 'Draw') {
    status = "It's a Draw!";
  } else if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Turn: ${isXNext ? 'Player 1' : 'Player 2'}`;
  }

  return <div className="status">{status}</div>;
};

export default StatusBar;
