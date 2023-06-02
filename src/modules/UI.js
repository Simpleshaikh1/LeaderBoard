import Store from './localStorage.js';

export default class UI {
  static scoreList = Store.getScores();

  static displayScores = async () => {
    const board = document.querySelector('.scoreBoard');
    board.innerHTML = '';
    if (UI.scoreList.length === 0) {
      board.innerHTML = 'No score to display yet';
    } else {
      UI.scoreList.forEach(() => {
        const scoreListItem = document.createElement('li');
        scoreListItem.classList.add('score-list-item');
        board.appendChild(scoreListItem);
      });
    }
  };

  // Add score
  static addScore = async (e) => {
    e.preventDefault();

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
    }
  };
}