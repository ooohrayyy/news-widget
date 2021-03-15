export default class Article {
  constructor (data, statusChangeHandler) {
    this._title = data.title;
    this._author = data.author;
    this._date = data.date;
    this._link = data.link;
    this.isRead = false;

    this._reportStatusChange = statusChangeHandler;

    this._markStatus = this._markStatus.bind(this);
  }

  _markStatus () {
    if (!this.isRead) {
      this.isRead = true;
      this._element.classList.add('article_read');
      this._buttonElement.classList.add('article__status_read');
      this._reportStatusChange();
    } else {
      this.isRead = false;
      this._element.classList.remove('article_read');
      this._buttonElement.classList.remove('article__status_read');
      this._reportStatusChange();
    }
  }

  createElement () {
    this._element = document.createElement('article');
    this._element.classList.add('widget__article', 'article');

    this._titleElement = document.createElement('h2');
    this._titleElement.classList.add('article__title');
    this._titleElement.textContent = this._title;
    this._element.append(this._titleElement);

    this._buttonElement = document.createElement('button');
    this._buttonElement.classList.add('article__status');
    this._buttonElement.addEventListener('click', this._markStatus);
    this._element.append(this._buttonElement);

    this._authorElement = document.createElement('p');
    this._authorElement.classList.add('article__author');
    this._authorElement.textContent = this._author;
    this._element.append(this._authorElement);

    this._dateElement = document.createElement('p');
    this._dateElement.classList.add('article__date');
    this._dateElement.textContent = this._date;
    this._element.append(this._dateElement);

    this._linkElement = document.createElement('a');
    this._linkElement.classList.add('article__link');
    this._linkElement.textContent = 'Подробнее';
    this._linkElement.setAttribute('href', this._link);
    this._linkElement.setAttribute('target', '_blank');
    this._element.append(this._linkElement);

    return this._element;
  }
}