const heading = document.querySelector('#greeting');
const button  = document.querySelector('#change-btn');

function changeGreeting() {
  heading.textContent = 'You clicked the button!';
}

button.addEventListener('click', changeGreeting);
