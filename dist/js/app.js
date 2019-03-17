// Selectors
const neck = document.querySelector('.neck');
const frets = document.querySelectorAll('.fret');
const fretsArr = [...frets];

// Event Listeners
fretsArr.forEach(fret => fret.addEventListener('mouseenter', hoverHighlight));
// Second eventlistener for mouseleave to remove highlight?

// Functions
function hoverHighlight() {
  // Get current item

  // Loop over and check
  frets.forEach(fret => {
    if (fret.innerText.includes('E')) {
      fret.classList.add('highlight');
    }
  });
}
