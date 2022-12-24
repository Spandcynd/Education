const rowsNode = document.querySelectorAll('.row')

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

    const row = rowsNode[Math.abs(nextPosition.y)]
    const nextDOMObject = row.children[nextPosition.x]

    if (isOutOfPlayground(nextPosition)) {
      console.log('End of map')
    } else if (isObstacle(nextDOMObject)) {
      console.log('There is obstacle');
    } else {
      move('up')
      render(nextDOMObject)
    }

    if (isFinish(nextDOMObject)) {
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

    const row = rowsNode[Math.abs(nextPosition.y)]
    const nextDOMObject = row.children[nextPosition.x]
    
    if (isOutOfPlayground(nextPosition)) {
      console.log('End of map')
    } else if (isObstacle(nextDOMObject)) {
      console.log('There is obstacle');
    } else {
      move('left')
      render(nextDOMObject)
    }

    if (isFinish(nextDOMObject)) {
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

    const row = rowsNode[Math.abs(nextPosition.y)]
    const nextDOMObject = row.children[nextPosition.x]
    
    if (isOutOfPlayground(nextPosition)) {
      console.log('End of map')
    } else if (isObstacle(nextDOMObject)) {
      console.log('There is obstacle');
    } else {
      move('down')
      render(nextDOMObject)
    }

    if (isFinish(nextDOMObject)) {
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

    const row = rowsNode[Math.abs(nextPosition.y)]
    const nextDOMObject = row.children[nextPosition.x]
    
    if (isOutOfPlayground(nextPosition)) {
      console.log('End of map')
    } else if (isObstacle(nextDOMObject)) {
      console.log('There is obstacle');
    } else {
      move('right')
      render(nextDOMObject)
    }

    if (isFinish(nextDOMObject)) {
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

function isOutOfPlayground(position) {
  if (
    position.y === 1 || 
    position.y === -10 ||
    position.x === -1 ||
    position.x === 10
  ) {
    return true
  }

  return false
}

function isObstacle(DOMObject) {
  if (DOMObject.className === 'cell wall') {
    return true
  }

  return false
}

function isFinish(DOMObject) {
  if (DOMObject.className === 'cell finish') {
    return true
  }

  return false
}

function render(DOMObject) {
  const playerNode = document.querySelector('.player')
  playerNode.remove()

  DOMObject.innerHTML = playerNode.outerHTML
}

function restart() {
  playerPosition.x = 0
  playerPosition.y = 0

  const row = rowsNode[playerPosition.y]
  const startDOMObject = row.children[playerPosition.x]

  render(startDOMObject)
}