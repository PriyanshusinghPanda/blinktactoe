import React from 'react'

const StatusBar = ({ isXNext, winner }) => {
  let status;
  if (winner === 'Draw'){
    status = "It's a Draw!";
  }else if (winner) {
    status = `Winner: ${winner}`
    }else {
        status = `Next Turn: ${isXNext ? 'X' : 'O'}`
    };

  return <div className="status">{status}</div>;
}

export default StatusBar
