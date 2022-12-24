const buttonNode = document.querySelector('.button-rotate')
const playgroundNode = document.querySelector('.playground')
const scoreNode = document.querySelector('.score').querySelector('span')

function toggleRotation() {
  playgroundNode.classList.toggle('playground_rotate')
}

// while (copy > 0) {
//   setTimeout(() => {
//     scoreNode.innerHTML -= 10
//   }, 1000)
//   copy -= 10
// }