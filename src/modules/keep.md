export default class Api {
  static baseURL =
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

  static Id = localStorage.getItem('ID');

  static apiURL = `games/${Api.Id}/scores/`;

  static url = Api.baseURL + Api.apiURL;

  static gameURL = `${Api.baseURL}games`;

  // Create game
  static createGame = async () => {
    fetch(Api.gameURL, {
      method: 'POST',
      body: JSON.stringify({
        name: 'Game of Honor',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        const gameID = responseData.result.split(' ')[3];
        localStorage.setItem('ID', gameID);
      });
  };

  // Get data
  static getData = async () => {
    const res = await fetch(Api.url);
    const { result } = await res.json();
    return result;
  };

  // Post data
  static postData = (data) => {
    fetch(Api.url, {
      method: 'POST',
      body: JSON.stringify({
        user: data.name,
        score: data.score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => res.json());
  };
}


export default class Api {
  static baseURL =
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

  static getId = () => localStorage.getItem('ID');

  static get apiURL() {
    return `games/${Api.getId()}/scores/`;
  }

  static get url() {
    return Api.baseURL + Api.apiURL;
  }

  static get gameURL() {
    return `${Api.baseURL}games`;
  }

  // Create game
    static createGame = async () => {
      try {
        const response = await fetch(Api.gameURL, {
          method: 'POST',
          body: JSON.stringify({
            name: 'Game of Honor',
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });

        const responseData = await response.json();
        const gameID = responseData.result.split(' ')[3];
        localStorage.setItem('ID', gameID);
        return responseData;
      } catch (error) {
        console.log(error)
        return error;
      }
    };

    // Get data
    static getData = async () => {
      try {
        const response = await fetch(Api.url);
        const { result } = await response.json();
        return result;
      } catch (error) {
        console.log(error)
        return error;
      }
    };

    // Post data
    static postData = async (data) => {
      try {
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

        return response.json();
      } catch (error) {
        console.log(error)
        return error;
      }
    };
}



