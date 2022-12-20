const popupNode = document.querySelector('.clipboard-notification')

function openPopup() {
  popupNode.className = 'clipboard-notification clipboard-notification_visible'
}

function closePopup() {
  popupNode.className = 'clipboard-notification clipboard-notification_hidden'
}