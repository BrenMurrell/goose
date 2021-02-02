import React, { useState, useEffect } from 'react'
import Goose from './Goose'

const Field = (props) => {
  const [goosePosX, setGoosePosX] = useState(0)
  const [goosePosY, setGoosePosY] = useState(0)
  const [moveSpeed, setMoveSpeed] = useState(10)
  const windowX = window.innerWidth
  const windowY = window.innerHeight

  const processKey = (event) => {
    const currentSpeed = moveSpeed
    console.log(event.code, currentSpeed)
    switch (event.code) {
      case 'KeyW':
        setGoosePosY(goosePosY => {
          return goosePosY - moveSpeed > 0 ? goosePosY - moveSpeed : 0
        })
        break
      case 'KeyS':
        setGoosePosY(goosePosY => {
          const newPos = goosePosY + moveSpeed
          return newPos > windowY - 10 ? goosePosY : newPos
        })
        break
      case 'KeyA':
        setGoosePosX(goosePosX => {
          return goosePosX - moveSpeed > 0 ? goosePosX - moveSpeed : 0
        })
        break
      case 'KeyD':
        setGoosePosX((goosePosX) => {
          console.log(currentSpeed)
          const newPos = goosePosX + currentSpeed
          return newPos > windowX - 10 ? goosePosX : newPos
        })
        break
      case 'ArrowUp':
        setMoveSpeed(moveSpeed => {
          console.log('new move speed', moveSpeed + 10)
          return moveSpeed + 10
        })
        break
      case 'ArrowDown':
        setMoveSpeed(moveSpeed => {
          console.log('new move speed', moveSpeed - 10)
          return moveSpeed - 10
        })
        break
      default:
        break
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', processKey)
  }, [])

  return (
    <div className="field">
      <Goose posX={goosePosX} posY={goosePosY} moveSpeed={moveSpeed} />
    </div>
  )
}

export default Field
