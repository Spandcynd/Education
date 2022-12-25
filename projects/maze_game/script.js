const mazeNode = document.querySelector('.maze')
const context = mazeNode.getContext('2d')

let current

class Maze {
  constructor(size, rows, columns) {
    this.size = size
    this.rows = rows
    this.columns = columns
    this.grid = []
    this.stack = []
  }

  setup() {
    for (let r = 0; r < this.rows; r++) {
      const row = []
      for (let c = 0; c < this.columns; c++) {
        const cell = new Cell(r, c, this.grid, this.size)
        row.push(cell)
      }
      this.grid.push(row)
    }
    current = this.grid[0][0]
  }

  draw() {
    mazeNode.height = this.size
    mazeNode.width = this.size
    mazeNode.style.background = 'black'
    current.visited = true

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        this.grid[r][c].show(this.size, this.columns, this.rows)
      }
    }
  }
}


class Cell {
  constructor(rowNum, colNum, parentGrid, parentSize) {
    this.rowNum = rowNum
    this.colNum = colNum
    this.parentGrid = parentGrid
    this.parentSize = parentSize
    this.visited = false
    this.walls = {
      topWall: true,
      rightWall: true,
      bottomWall: true,
      leftWall: true
    }
  }

  drawTopWall(x, y, size, columns) {
    context.beginPath()
    context.moveTo(x, y)
    context.lineTo(x + size / columns, y)
    context.stroke()
  }

  drawRightWall(x, y, size, columns, rows) {
    context.beginPath()
    context.moveTo(x + size / columns, y)
    context.lineTo(x + size / columns, y + size / rows)
    context.stroke()
  }

  drawBottomWall(x, y, size, columns, rows) {
    context.beginPath()
    context.moveTo(x, y + size / rows)
    context.lineTo(x + size / columns, y + size / rows)
    context.stroke()
  }

  drawLeftWall(x, y, size, rows) {
    context.beginPath()
    context.moveTo(x, y)
    context.lineTo(x, y + size / rows)
    context.stroke()
  }

  show(size, columns, rows) {
    const x = this.colNum * size / columns
    const y = this.rowNum * size / rows
    
    context.strokeStyle = 'white'
    context.fillStyle = 'black'
    context.lineWidth = 2

    if (this.walls.topWall) this.drawTopWall(x, y, size, columns)
    if (this.walls.rightWall) this.drawRightWall(x, y, size, columns, rows)
    if (this.walls.bottomWall) this.drawBottomWall(x, y, size, columns, rows)
    if (this.walls.leftWall) this.drawLeftWall(x, y, size, rows)
    if (this.visited) {
      context.fillRect(x + 1, y + 1, size / columns - 2, size / rows - 2)
    }
  }
}

// const mazeSmall = new Maze(500, 5, 5)
const mazeMedium = new Maze(500, 10, 10)
// const mazeBig = new Maze(500, 20, 20)

mazeMedium.setup()
mazeMedium.draw()
