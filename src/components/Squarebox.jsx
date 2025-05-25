import React from 'react'

const Squarebox = ({value , onClick}) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

export default Squarebox