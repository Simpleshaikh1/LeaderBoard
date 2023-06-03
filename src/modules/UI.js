export default class UI {
  constructor() {
    this.scoreList = JSON.parse(localStorage.getItem('scores')) || [];
  }

  showScores = async () => {
    const listOfScores = document.querySelector('.scoreBoard');
    listOfScores.innerHTML = '';
    listOfScores.innerHTML = '<li Class="gray" ><span class="liName">Name</span><span class="liScore">| Score</span></li>';

    for (let i = 0; i < this.scoreList.length; i += 1) {
      const li = document.createElement('li');
      if (i % 2) {
        li.className = 'grey';
      }
      li.innerHTML = `<span class="liName">${this.scoreList[i].user}</span><span class="liScore">| ${this.scoreList[i].score}</span>`;
      listOfScores.appendChild(li);
    }
  };

  // Add score
  addScore = async (gameScore) => {
    this.scoreList = gameScore;
    this.scoreList.sort((a, b) => b.score - a.score);
    localStorage.setItem('scores', JSON.stringify(this.scoreList));
  };

  getStorage = () => this.scoreList;
}