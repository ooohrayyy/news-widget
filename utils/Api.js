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
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: {
        Authorization: this._key
      }
    })
      .then(res => this._checkResponseData(res));
  }
}

export const api = new Api({
  baseUrl: 'http://newsapi.org/v2/top-headlines?country=ru',
  key: 'dfeecfd7437942a09109d3f8d4e7083c'
});