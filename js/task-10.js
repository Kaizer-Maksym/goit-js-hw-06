// const refs = {
//   input: document.querySelector('input'),
//   createboxBtn: document.querySelector('[data-create]'),
//   deleteboxBtn: document.querySelector('[data-destroy]'),
//   boxes: document.getElementById('boxes'),
// };

// refs.input.addEventListener('input', inputChange);
// refs.createboxBtn.addEventListener('click', createBox);
// refs.deleteboxBtn.addEventListener('click', deleteBox);

// let baseboxSize = 30;

// function inputChange(event) {
//   event.target.value;
// }

// function createBox(amount) {
//   let amount = refs.input.value;
//   console.log(amount);
//   for (let i = 0; i < countBox; i++) {
//     baseboxSize += 10;
//     const newBox = document.createElement('div');
//     newBox.style.background = getRandomHexColor();
//     newBox.style.height = baseboxSize + 'px';
//     newBox.style.width = baseboxSize + 'px';
//     newBox.style.margin = '10px';
//     newBox.classList.add('new-box');
//     refs.boxes.append(newBox);
//   }
// }

// function deleteBox() {
//   const allNewBoxes = document.querySelectorAll('.new-box');
//   for (let allNewBoxe of allNewBoxes) {
//     boxes.removeChild(allNewBoxe);
//   }
//   baseboxSize = 30;
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// getRandomHexColor();
