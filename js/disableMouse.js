function disableMouse(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  document.addEventListener('mousemove', disableMouse);
  