export default class Api {
    // Create game
    createGame = async (gameName) => {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
        method: 'POST',
        body: JSON.stringify({
          name: gameName,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const jsonData = await response.json();
      return jsonData.result.split(' ')[3];
    };

    // Get data
    setScore = async (gameId, name, score) => {
      await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
        method: 'POST',
        body: JSON.stringify({
          user: name,
          score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    };

    // get scores
    getAllScores = async (gameId) => {
      const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const jsonData = await response.json();
      return jsonData.result;
    };
}
