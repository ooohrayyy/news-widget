export default class Article {
  constructor (container, data) {
    this._container = container;

    this._title = data.title;
    this._author = data.author;
    this._date = data.date;
    this._link = data.link;

    this._isRead = false;
  }
}