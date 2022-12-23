const rowsNode = document.querySelectorAll('.row')

const playground = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
]

const playerPosition = {
  x: 0,
  y: 0
}

document.addEventListener('keydown', event => {
  if (event.code === 'KeyW') {
    const nextPosition = {
      x: playerPosition.x,
      y: playerPosition.y + 1
    }

    if (isOutOfPlayground(nextPosition)) {
      console.log('End of map')
    } else if (isObstacle(nextPosition)) {
      console.log('There is obstacle');
    } else {
      move('up')
      console.log(playerPosition)
      render(playerPosition)
    }

    if (isFinish(playerPosition)) {
      setTimeout(() => {
        alert('You win!')
        restart()
      }, 200)
    }

    return
  }

  if (event.code === 'KeyA') {
    const nextPosition = {
      x: playerPosition.x - 1,
      y: playerPosition.y 
    }
    
    if (isOutOfPlayground(nextPosition)) {
      console.log('End of map')
    } else if (isObstacle(nextPosition)) {
      console.log('There is obstacle');
    } else {
      move('left')
      console.log(playerPosition)
      render(playerPosition)
    }

    if (isFinish(playerPosition)) {
      setTimeout(() => {
        alert('You win!')
        restart()
      }, 200)
    }

    return
  }

  if (event.code === 'KeyS') {
    const nextPosition = {
      x: playerPosition.x,
      y: playerPosition.y - 1
    }
    
    if (isOutOfPlayground(nextPosition)) {
      console.log('End of map')
    } else if (isObstacle(nextPosition)) {
      console.log('There is obstacle');
    } else {
      move('down')
      console.log(playerPosition)
      render(playerPosition)
    }

    if (isFinish(playerPosition)) {
      setTimeout(() => {
        alert('You win!')
        restart()
      }, 200)
    }
    
    return
  }

  if (event.code === 'KeyD') {
    const nextPosition = {
      x: playerPosition.x + 1,
      y: playerPosition.y
    }
    
    if (isOutOfPlayground(nextPosition)) {
      console.log('End of map')
    } else if (isObstacle(nextPosition)) {
      console.log('There is obstacle');
    } else {
      move('right')
      console.log(playerPosition)
      render(playerPosition)
    }

    if (isFinish(playerPosition)) {
      setTimeout(() => {
        alert('You win!')
        restart()
      }, 200)
    }
    
    return
  }
})

function move(direction) {
  if (direction === 'up') {
    playerPosition.y += 1
    return
  }

  if (direction === 'left') {
    playerPosition.x -= 1
    return
  }

  if (direction === 'down') {
    playerPosition.y -= 1
    return
  }

  if (direction === 'right') {
    playerPosition.x += 1
    return
  }
}

function isOutOfPlayground(nextPosition) {
  if (
    nextPosition.y === 1 || 
    nextPosition.y === -10 ||
    nextPosition.x === -1 ||
    nextPosition.x === 10
  ) {
    return true
  }
  return false
}

function isObstacle(nextPosition) {
  const row = rowsNode[Math.abs(nextPosition.y)]
  const element = row.children[nextPosition.x]

  if (element.className === 'cell wall') {
    return true
  }
  return false
}

function isFinish(playerPosition) {
  const row = rowsNode[Math.abs(playerPosition.y)]
  const element = row.children[playerPosition.x]

  if (element.className === 'cell finish') {
    return true
  }

  return false
}

function render(playerPosition) {
  const playerNode = document.querySelector('.player')
  playerNode.remove()

  const row = rowsNode[Math.abs(playerPosition.y)]
  const element = row.children[playerPosition.x]
  element.innerHTML = playerNode.outerHTML
}

function restart() {
  playerPosition.x = 0
  playerPosition.y = 0

  render(playerPosition)
}