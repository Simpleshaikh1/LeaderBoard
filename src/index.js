import './index.css';
import UI from './modules/UI.js';
import Api from './modules/api.js';

const scoresS = new UI();
const api = new Api();
if (scoresS.getStorage().length) {
  scoresS.showScores();
}

let gameId = localStorage.getItem('gameId') || '';
if (gameId === '') {
  (async () => {
    try {
      gameId = await api.createGame('Toyyib Game of Brain');
      localStorage.setItem('gameId', gameId);
    } catch (error) {
      console.error(error);
    }
  })();
}

const fillForm = document.querySelector('.leaderForm');
fillForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const playerName = document.getElementsByClassName('input-name').value;
  const playerScore = document.getElementsByClassName('input-score').value;
  api.setScore(gameId, playerName, playerScore);
  setTimeout(() => {
    fillForm.reset();
  }, 1000);
});

const refreshBtn = document.querySelector('.refresh');
refreshBtn.addEventListener('click', () => {
  let score;
  (async () => {
    try {
      score = await api.getAllScores(gameId);
      const newScore = new UI();
      newScore.addScore(score);
      newScore.showScores();
    } catch (error) {
      console.error(error.message);
    }
  })();
});
