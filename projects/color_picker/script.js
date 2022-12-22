const columnsNode = document.querySelectorAll('.col')

document.addEventListener('keydown', event => {
  event.preventDefault()
  if (event.code === 'Space') {
    setRandomColors()
  }
})

document.addEventListener('click', event => {
  if (event.target.dataset.type === 'lock') {
    const node = event.target.tagName.toLowerCase() === 'i'
      ? event.target
      : event.target.children[0]
    node.classList.toggle('fa-lock')
    node.classList.toggle('fa-lock-open')
  }

  if (event.target.dataset.type === 'text-to-clipboard') {
    const text = event.target.textContent
    copyToClipBoard(text)
    openPopup()
    setTimeout(() => {
      closePopup()
    }, 2000);
  }
})

function setRandomColors(isInitial) {
  if (isInitial) {
    if (document.location.hash.length === 35) {
      initialSetRandomColors()
      return
    }
  }

  const colors = []
  columnsNode.forEach((col, index) => {
    columnText = col.querySelector('h2')
    columnLock = col.querySelector('button')
    if (col.querySelector('i').classList[1] === 'fa-lock') {
      colors.push(columnText.textContent)
    } else {
      const hexMap = '0123456789ABCDEF'
      hexColorArray = ['#']
      for (let i = 0; i < 6; i++) {
        randomHexSymbol = hexMap[Math.floor(Math.random() * 16)]
        hexColorArray.push(randomHexSymbol)
      }
      hexColor = hexColorArray.join('')
      colors.push(hexColor)
    }

    const color = colors[index]
    col.style.background = color
    columnText.textContent = color
    const luminance = chroma(color).luminance()
    if (luminance > 0.5) {
      columnText.style.color = 'black'
      columnLock.style.color = 'black'
    } else {
      columnText.style.color = 'white'
      columnLock.style.color = 'white'
    }
  })
  setHashColors(colors)
}

function initialSetRandomColors() {
  const colors = getColorsFromHash()
  columnsNode.forEach((col, index) => {
    const color = colors[index]
    columnText = col.querySelector('h2')
    columnLock = col.querySelector('button')
    columnText.textContent = color
    col.style.background = color
    const luminance = chroma(color).luminance()
    if (luminance > 0.5) {
      columnText.style.color = 'black'
      columnLock.style.color = 'black'
    } else {
      columnText.style.color = 'white'
      columnLock.style.color = 'white'
    }
  })
}

function copyToClipBoard(text) {
  return navigator.clipboard.writeText(text)
}

function setHashColors(colors) {
  document.location.hash = colors.map(color => {
    return color.substring(1)
  }).join('-')
}

function getColorsFromHash() {
  return document.location.hash.substring(1).split('-').map(color => '#' + color)
}

setRandomColors(true)