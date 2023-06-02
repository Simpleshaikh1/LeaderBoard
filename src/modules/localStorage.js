export default class Storage {
    static getScores = () => {
      let scores;
      if (localStorage.getItem('scores') === null) {
        scores = [];
      } else {
        scores = JSON.parse(localStorage.getItem('scores'));
      }
      return scores;
    };

    static updateScores = (score) => {
      localStorage.setItem('scores', JSON.stringify(score));
    };

    static setScores = (score) => {
      const scores = Storage.getScores();
      scores.push(score);
      localStorage.setItem('scores', JSON.stringify(scores));
    };

    static removeScore = (e, scoreID) => {
      e.preventDefault();
      let scores = Storage.getScores();
      scores = scores.filter((score) => score.index !== scoreID);
      localStorage.setItem('tasks', JSON.stringify(scores));
    };

    static clearScores = (done) => {
      const scores = Storage.getScores();
      const scoreList = scores.map((score) => {
        if (score.index === done.index) {
          return done;
        }
        return score;
      });
      const newScore = scoreList.filter((score) => score.done === false);
      Storage.updateScores(newScore);
    };
}