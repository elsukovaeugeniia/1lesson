import "./css/style.css";
import goblinImg from '../img/goblin.png';

const FIELD_SIZE = 4;
const TOTAL_CELLS = FIELD_SIZE * FIELD_SIZE;
const MOVE_INTERVAL = 1000;

const gameField = document.getElementById('game-field');

// Создаём игровое поле
for (let i = 0; i < TOTAL_CELLS; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  gameField.append(cell);
}

// Создаём гоблина
const goblin = document.createElement('img');
goblin.className = 'character';
goblin.src = goblinImg;
goblin.alt = 'Гоблин';

// Функция для случайного числа
function getRandom(max) {
  return Math.floor(Math.random() * max);
}

// Функция перемещения гоблина
function moveGoblin() {
  const cells = document.querySelectorAll('.cell');
  const currentCell = document.querySelector('.cell:has(img)');
  let newCell;

  // Выбираем новую клетку, пока она не совпадёт с текущей
  do {
    newCell = cells[getRandom(TOTAL_CELLS)];
  } while (currentCell && newCell === currentCell);

  newCell?.append(goblin); // Перемещаем гоблина в новую клетку
}

// Первое размещение и запуск перемещений
moveGoblin();
setInterval(moveGoblin, MOVE_INTERVAL);

