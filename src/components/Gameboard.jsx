import React from 'react'
import Squarebox from './Squarebox'

const Gameboard = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Squarebox key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  )
}

export default Gameboard