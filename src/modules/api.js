export default class Api {
    static baseURL =
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

    static Id = localStorage.getItem('ID');

    static apiURL = `games/${Api.Id}/scores/`;

    static url = Api.baseURL + Api.apiURL;

    static gameURL = `${Api.baseURL}games`;

    // Create game
    static createGame = async () => {
      const response = await fetch(Api.gameURL, {
        method: 'POST',
        body: JSON.stringify({
          name: 'Game of Honor',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const jsonData = await response.json();

      const gameID = await jsonData.result.split(' ')[3];
      return localStorage.setItem('ID', gameID);
    };

    // Get data
    static getData = async () => {
      const res = await fetch(Api.url);
      const { result } = await res.json();
      return result;
    };

    // Post data
    static postData = async (data) => {
      const response = await fetch(Api.url, {
        method: 'POST',
        body: JSON.stringify({
          user: data.name,
          score: data.score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const jsonData = await response.json();
      return jsonData;
    };
}
