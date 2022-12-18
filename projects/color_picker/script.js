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
  }
})

function setRandomColors() {
  const hexMap = '0123456789ABCDEF'
  columnsNode.forEach(col => {
    columnText = col.querySelector('h2')
    columnLock = col.querySelector('button')
    if (col.querySelector('i').classList[1] === 'fa-lock') {
      return
    }
    hexColorArray = ['#']
    for (let i = 0; i < 6; i++) {
      randomHexSymbol = hexMap[Math.floor(Math.random() * 16)]
      hexColorArray.push(randomHexSymbol)
    }
    hexColor = hexColorArray.join('')

    col.style.background = hexColor
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

function copyToClipBoard(text) {
  return navigator.clipboard.writeText(text)
}

setRandomColors()