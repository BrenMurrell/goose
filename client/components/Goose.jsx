import React, { useState, useEffect } from 'react'

const Goose = (props) => {
  const [goosePosX, setGoosePosX] = useState(0)
  const [goosePosY, setGoosePosY] = useState(0)

  const processKey = (event) => {
    switch (event.code) {
      case 'ArrowUp':
        setGoosePosY(goosePosY => goosePosY - 10)
        break
      case 'ArrowDown':
        setGoosePosY(goosePosY => goosePosY + 10)
        break
      case 'ArrowLeft':
        setGoosePosX(goosePosX => goosePosX - 10)
        break
      case 'ArrowRight':
        setGoosePosX(goosePosX => goosePosX + 10)
        break
      default:
        break
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', processKey)
  }, [])

  return (
    <div className="goose" style={{ left: goosePosX, top: goosePosY }}></div>
  )
}

export default Goose
