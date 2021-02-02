import React from 'react'

const Goose = (props) => {
  const { posX, posY, moveSpeed } = props

  return (
    <div className="goose" style={{ left: posX, top: posY }}>{moveSpeed}</div>
  )
}

export default Goose
