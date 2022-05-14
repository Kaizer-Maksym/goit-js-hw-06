const refs = {
  input: document.querySelector('input'),
  createboxBtn: document.querySelector('[data-create]'),
  deleteboxBtn: document.querySelector('[data-destroy]'),
  boxes: document.getElementById('boxes'),
};

refs.input.addEventListener('input', () => {});
refs.createboxBtn.addEventListener('click', createBoxes);
refs.deleteboxBtn.addEventListener('click', deleteBox);

let baseboxSize = 30;

function createBoxes(amount) {
  amount = refs.input.value;

  for (let i = 0; i < amount; i += 1) {
    baseboxSize += 10;
    const newBox = document.createElement('div');
    newBox.style.background = getRandomHexColor();
    newBox.style.height = baseboxSize + 'px';
    newBox.style.width = baseboxSize + 'px';
    newBox.style.margin = '10px';
    newBox.classList.add('new-box');
    boxes.append(newBox);
  }
}

function deleteBox() {
  const allNewBoxes = document.querySelectorAll('.new-box');
  for (let allNewBoxe of allNewBoxes) {
    boxes.removeChild(allNewBoxe);
  }
  baseboxSize = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
getRandomHexColor();
