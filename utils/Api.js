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
}