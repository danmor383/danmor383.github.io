document.getElementById('pp-button').addEventListener('click', () => {
    if (eventPP.style.display == 'flex') {
        eventPP.style.display = 'none';
    }
    else {
        eventPP.style.display = 'flex';
    }
})

eventPP.addEventListener('click', (event) => {
    if (event.target === eventPP) {
      eventPP.style.display = 'none';
    }
  })


document.getElementById('x-btn__icon-close').addEventListener('click', () => {
    eventPP.style.display = 'none';
});