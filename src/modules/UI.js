import Store from './localStorage.js';
import Api from './api.js';

export default class UI {
  static scoreList = Store.getScores();

  static showScores = async () => {
    const scoreList = await Api.getData();
    const board = document.querySelector('.scoreBoard');
    board.innerHTML = '';
    if (scoreList === 0) {
      board.innerHTML = 'No score to display yet';
    } else {
      UI.scoreList.forEach((score, index) => {
        const scoreListItem = document.createElement('li');
        scoreListItem.classList.add('scoreList');

        if ((index + 1) % 2 === 0) {
          scoreListItem.classList.add('gray');
        } else {
          scoreListItem.classList.add('white');
        }

        const scoreText = `${score.user}: ${score.score}`;
        scoreListItem.innerHTML = scoreText;
        board.appendChild(scoreListItem);
      });
    }
  };

  // Add score
  static addScore = async (code) => {
    code.preventDefault();

    const name = document.querySelector('.input-name');
    const score = document.querySelector('.input-score');
    const regExNum = /^(d+ )*(d+)$/;
    const regExAlph = /^[a-zA-Z]+$/;

    if (
      name.value === ''
          || !regExAlph.test(name.value)
    ) {
      name.focus();
      return;
    }

    if (
      score.value === ''
          || !regExNum.test(score.value)
    ) {
      score.focus();
      return;
    }

    const data = { name: name.value, score: score.value };
    await Api.postData(data);
    name.value = '';
    score.value = '';
  };
}