const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: '',
    symbol: 'X',
  },
  {
    name: '',
    symbol: 'O',
  },
];

const playerConfigOverlayEl = document.getElementById('config-overlay');
const backdropEl = document.getElementById('backdrop');
const formEl = document.querySelector('form');
const errorsOutputEl = document.getElementById('config-errors');
const gameAreaEl = document.getElementById('active-game');
const activePlayerNameEl = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

const editPlayer1BtnEl = document.getElementById('edit-player-1-btn');
const editPlayer2BtnEl = document.getElementById('edit-player-2-btn');
const cancelConfigBtnEl = document.getElementById('cancel-config-btn');
const startNewGameBtnEl = document.getElementById('start-game-btn');
const gameFieldEl = document.getElementById('game-board');

editPlayer1BtnEl.addEventListener('click', openPlayerConfig);
editPlayer2BtnEl.addEventListener('click', openPlayerConfig);

cancelConfigBtnEl.addEventListener('click', closePlayerConfig);
backdropEl.addEventListener('click', closePlayerConfig);

formEl.addEventListener('submit', savePlayerConfig);

startNewGameBtnEl.addEventListener('click', startNewGame);
gameFieldEl.addEventListener('click', selectGameField);
