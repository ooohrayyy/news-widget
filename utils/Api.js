class Api {
  constructor (options) {
    this._baseUrl = options.baseUrl;
    this._key = options.key;
  }

  _checkResponseData (res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getNews () {
    return fetch(`${this._baseUrl}?q=news&country=ru&language=ru&limit=20&api_token=${this._key}`, {
      method: 'GET',
      redirect: 'follow'
    })
      .then(res => this._checkResponseData(res));
  }
}

export const api = new Api({
  baseUrl: 'https://gnewsapi.net/api/search',
  key: '6WXgPJLBFPzKnv9vt5IrMh8CNZGAC24yguwKwTMVseaqVLdeJXLgsRacxlOZ'
});