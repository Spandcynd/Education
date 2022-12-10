const columnsNode = document.querySelectorAll('.col')
document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    setRandomColors()
  }
})

function setRandomColors() {
  const hexMap = '0123456789ABCDEF'
  columnsNode.forEach(col => {
    hexColorArray = ['#']
    for (let i = 0; i < 6; i++) {
      randomHexSymbol = hexMap[Math.floor(Math.random() * 16)]
      hexColorArray.push(randomHexSymbol)
    }
    hexColor = hexColorArray.join('')

    col.style.background = hexColor
    columnText = col.querySelector('h2')
    columnLock = col.querySelector('button')
    columnText.textContent = hexColor
    const luminance = chroma(hexColor).luminance()
    if (luminance > 0.5) {
      columnText.style.color = 'black'
      columnLock.style.color = 'black'
    } else {
      columnText.style.color = 'white'
      columnLock.style.color = 'white'
    }
  })
}

setRandomColors()