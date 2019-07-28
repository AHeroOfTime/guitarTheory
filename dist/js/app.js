// Selectors
const neck = document.querySelector('.neck');
const frets = document.querySelectorAll('.fret');
const fretsArr = [...frets];

// Event Listeners
fretsArr.forEach(fret => fret.addEventListener('mouseenter', hoverHighlight));
// Second eventlistener for mouseleave to remove highlight?
fretsArr.forEach(fret => fret.addEventListener('mouseleave', removeHighlight));

// console.log(fretsArr);

// Functions
function hoverHighlight() {
  // Get current item - make own function for grabbing current fret? (move up^)

  // Loop over and check
  // currently adds highlight on any fret hover
  fretsArr.forEach(fret => {
    if (fret.dataset.note.includes('E')) {
      fret.classList.add('highlight');
    }
  });
}

// remove highlight function v
function removeHighlight() {
  fretsArr.forEach(fret => {
    if (fret.dataset.note) {
      fret.classList.remove('highlight');
    }
  });
}
