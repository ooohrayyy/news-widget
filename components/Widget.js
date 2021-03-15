export default class Widget {
  constructor (target) {
    this._target = target;
    this._articles = [];
    this._isOpen = false;

    this._toggle = this._toggle.bind(this);
  }

  _create () {
    this._element = document.createElement('div');
    this._element.classList.add('widget', 'widget_closed');

    this._button = document.createElement('button');
    this._button.classList.add('widget__button');
    this._button.textContent = 'Новости';
    this._button.addEventListener('click', this._toggle);

    this._container = document.createElement('section');
    this._container.classList.add('widget__container', 'widget__container_closed');

    this._element.prepend(this._container);
    this._element.prepend(this._button);

    return this._element;
  }

  _toggle () {
    if (this._isOpen) {
      this._element.classList.add('widget_closed');
      this._container.classList.add('widget__container_closed');
      this._isOpen = false;
    } else {
      this._element.classList.remove('widget_closed');
      this._container.classList.remove('widget__container_closed');
      this._isOpen = true;
    }
  }

  add () {
    const widget = this._create();

    this._target.prepend(widget);
  }

  addArticle (article, articleElement) {
    this._articles.push(article);
    this._container.append(articleElement);
  }
}