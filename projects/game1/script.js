document.addEventListener('keydown', event => {
  if (event.code === 'KeyW') {
    move('up')
    console.log(playerPosition)
  }
})

document.addEventListener('keydown', event => {
  if (event.code === 'KeyA') {
    move('left')
    console.log(playerPosition)
  }
})

document.addEventListener('keydown', event => {
  if (event.code === 'KeyS') {
    move('down')
    console.log(playerPosition)
  }
})

document.addEventListener('keydown', event => {
  if (event.code === 'KeyD') {
    move('right')
    console.log(playerPosition)
  }
})

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

function move(direction) {
  if (direction === 'up') {
    playerPosition.y += 1
  }
  if (direction === 'left') {
    playerPosition.x -= 1
  }
  if (direction === 'down') {
    playerPosition.y -= 1
  }
  if (direction === 'right') {
    playerPosition.x += 1
  }
}