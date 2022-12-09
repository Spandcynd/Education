const columnsNode = document.querySelectorAll('.col')

function setRandomColors() {
  const hexMap = '0123456789ABCDEF'
  columnsNode.forEach(col => {
    let hexColor = ['#']
    for (let i = 0; i < 6; i++) {
      randomHexSymbol = hexMap[Math.floor(Math.random() * 16)]
      hexColor.push(randomHexSymbol)
    }
    col.style.background = hexColor.join('')
  })
}

setRandomColors()