const button = document.querySelector("#click-me");
const flowerButton = document.querySelector('.task-2');
const titleChangerInput = document.querySelector('#title-changer');
const image = document.querySelector('img');
const headerH1 = document.querySelector('h1');
const checkBox = document.querySelector('#check-box')
const body = document.querySelector('body');

function imageHandler() {
  headerH1.classList.toggle('pink-color');
}

function titleChangerHandler(event) {
  const value = event.target.value;
  headerH1.innerText = value;
}

function flowerButtonHandler() {
  document.title = '💐🌷🌼'
}

function handleClick(event) {
  // If shift key pressed, change the inner text of the button to be NAILED IT
  if (event.shiftKey) {
    button.innerText = 'NAILED IT'
  }
}

button.addEventListener("click", handleClick);
flowerButton.addEventListener("click", flowerButtonHandler)
titleChangerInput.addEventListener('keyup', titleChangerHandler)
image.addEventListener('mouseenter', imageHandler)
image.addEventListener('mouseleave', imageHandler)
checkBox.addEventListener('change', () => {
  headerH1.classList.toggle('funky');
})

body.addEventListener('keyup', (e) => {
  if (e.code === 'KeyH') {
    body.classList.toggle('blue-color');
  }
})

// document.querySelector("#title-changer").addEventListener("keyup", (e) => {
//   console.log(e.target.value);
// });
