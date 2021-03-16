export default class Widget {
  constructor (target) {
    this._target = target;
    this._articles = [];
    this._isOpen = false;

    this._toggleState = this._toggleState.bind(this);
  }

  _create () { // Создать виджет
    this._element = document.createElement('div');
    this._element.classList.add('widget', 'widget_closed');

    this._button = document.createElement('button');
    this._button.classList.add('widget__button');
    this._button.textContent = `⬆ Новости (${this._unreadCount})`;
    this._button.addEventListener('click', this._toggleState);
    this._element.append(this._button);

    this._container = document.createElement('section');
    this._container.classList.add('widget__container', 'widget__container_closed');
    this._element.append(this._container);

    return this._element;
  }

  _toggleState () { // Открыть или закрыть виджет
    if (this._isOpen) {
      this._element.classList.add('widget_closed');
      this._container.classList.add('widget__container_closed');
      this._button.textContent = `⬆ Новости (${this._unreadCount})`;
      this._isOpen = false;
    } else {
      this._element.classList.remove('widget_closed');
      this._container.classList.remove('widget__container_closed');
      this._button.textContent = `⬇ Новости (${this._unreadCount})`;
      this._isOpen = true;
    }
  }

  add () { // Добавить виджет на страницу
    const widget = this._create();
    this._target.prepend(widget);
  }

  insert (article, articleElement) { // Добавить новость в виджет
    this._articles.push(article);
    this._container.append(articleElement);
  }

  clear () { // Очистить виджет
    this._articles.forEach(article => {
      article.deleteElement();
    });
    this._articles = [];
  }

  refreshCounter () { // Обновить счётчик непрочитанных новостей
    this._unreadArticles = this._articles.filter(article => article.isRead === false);
    this._unreadCount = this._unreadArticles.length;

    if (this._isOpen) {
      this._button.textContent = `⬇ Новости (${this._unreadCount})`;
    } else {
      this._button.textContent = `⬆ Новости (${this._unreadCount})`;
    }
  }
}