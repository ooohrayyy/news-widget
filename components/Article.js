export default class Article {
  constructor (container, data) {
    this._container = container;

    this._title = data.title;
    this._author = data.author;
    this._date = data.date;
    this._link = data.link;

    this._isRead = false;
  }

  _create () {
    this._element = document.createElement('article');
    this._element.classList.add('widget__article', 'article');

    this._titleElement = document.createElement('h2');
    this._titleElement.classList.add('article__title');
    this._titleElement.textContent = this._title;
    this._element.prepend(this._titleElement);

    this._button = document.createElement('button');
    this._button.classList.add('article__status');
    this._element.prepend(this._button);

    this._authorElement = document.createElement('p');
    this._authorElement.classList.add('article__author');
    this._authorElement.textContent = this._author;
    this._element.prepend(this._authorElement);

    this._dateElement = document.createElement('p');
    this._dateElement.classList.add('article__date');
    this._dateElement.textContent = this._date;
    this._element.prepend(this._dateElement);

    this._linkElement = document.createElement('a');
    this._linkElement.classList.add('article__link');
    this._linkElement.textContent = 'Подробнее';
    this._linkElement.setAttribute('href', this._link);
    this._linkElement.setAttribute('target', '_blank');
    this._element.prepend(this._linkElement);

    return this._element;
  }
}