// Selectors
const neck = document.querySelector('.neck');
const frets = document.querySelectorAll('.fret');
const fretsArr = [...frets];

// Event Listeners
fretsArr.forEach(fret => fret.addEventListener('mouseenter', hoverHighlight));
// Second eventlistener for mouseleave to remove highlight?
fretsArr.forEach(fret => fret.addEventListener('mouseleave', removeHighlight));

// Functions
function hoverHighlight(e) {
  // Loop over and check data-attr
  fretsArr.forEach(fret => {
    if (fret.dataset.note === e.target.dataset.note) {
      fret.classList.add('highlight');
    }
  });
}

// remove highlight function v
function removeHighlight(e) {
  fretsArr.forEach(fret => {
    if (fret.dataset.note) {
      fret.classList.remove('highlight');
    }
  });
}
