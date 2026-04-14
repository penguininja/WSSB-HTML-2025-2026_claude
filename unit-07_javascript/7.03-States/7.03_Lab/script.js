// 7.03 JS + CSS Lab

// Step 1: Find the buttons
const largeOnBtn  = document.querySelector('#large-on-btn');
const largeOffBtn = document.querySelector('#large-off-btn');

// Step 2: Write the functions
function turnLargeOn() {
  document.body.classList.add('large-active');
  console.log('large-active');
}

function turnLargeOff() {
  // Change the next line to remove the class instead of adding it
  document.body.classList.add('large-active');
  // Change this line to log the inactive state
  console.log('');
}

// Step 3: Connect the buttons
largeOnBtn.addEventListener('click', turnLargeOn);
// Change the next line to connect the largeOffBtn to the turnLargeOff function
largeOnBtn.addEventListener('click', turnLargeOn);


// Bonus: Add a dark mode state
// 1. Add .dark-active styles to style.css
// 2. Add two new buttons to index.html  (id="dark-on-btn" and id="dark-off-btn")
// 3. Fill in the code below

const darkOnBtn  = document.querySelector('#dark-on-btn');
const darkOffBtn = document.querySelector('#dark-off-btn');

function turnDarkOn() {
  document.body.classList.add('dark-active');
  console.log('dark-active');
}

function turnDarkOff() {
  // write this one yourself!
}

darkOnBtn.addEventListener('click', turnDarkOn);
// Connect the darkOffBtn to an event listener

// Bonus 2: Add another set of buttons and states from scratch!
