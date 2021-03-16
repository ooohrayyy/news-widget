// * Образцы источников

const sourceExample = [
  {
    title: 'Чиновникам разрешат сбивать пешеходов при чрезвычайных обстоятельствах',
    author: 'Ефим Аноним',
    date: '09:59 15.03.2021',
    link: 'https://panorama.pub/news/chinovnikam-razreshat-sbivat-peshexodov-pri-chrezvychajnyx-obstoyatelstvax'
  },
  {
    title: 'Для борьбы с алкоголизмом Минздрав предложил уменьшить размер рюмки',
    author: 'Виталий Манн',
    date: '09:16 15.03.2021',
    link: 'https://panorama.pub/news/dlya-borby-s-alkogolizmom-minzdrav-predlozhil-umenshit-razmer-ryumki'
  },
  {
    title: 'Камеру на Рублёвском шоссе демонтировали из-за клеветы на чиновников',
    author: 'Эрвин Кляйн',
    date: '09:59 15.03.2021',
    link: 'https://panorama.pub/news/kameru-na-rublyovskom-shosse-demontirovali-iz-za-klevety-na-chinovnikov'
  },
  {
    title: 'Роботы Boston Dynamics создали профсоюз',
    author: 'Потап Романов',
    date: '19:23 06.03.2021',
    link: 'https://panorama.pub/news/roboty-boston-dynamics-sozdali-profsoyuz'
  },
  {
    title: 'Байден подписал указ о скачкообразном повышении цен в России',
    author: 'Ефим Аноним',
    date: '08:40 10.03.2021',
    link: 'https://panorama.pub/news/bajden-podpisal-ukaz-o-skachkoobraznom-uvelichenii-czen-na-produkty-v-rossii'
  },
  {
    title: 'Дмитрий Гордон станет рекламным лицом Head&Shoulders',
    author: 'Константин Ковидный',
    date: '19:12 14.03.2021',
    link: 'https://panorama.pub/news/dmitrij-gordon-stanet-reklamnym-liczom-shampunej-headshoulders'
  },
  {
    title: 'Росавиация хочет регламентировать полёты пчёл',
    author: 'Виталий Манн',
    date: '15:35 14.03.2021',
    link: 'https://panorama.pub/news/rosaviacziya-xochet-reglamentirovat-polyoty-pchyol'
  },
  {
    title: 'Marvel выкупила права на Чебурашку и создаст на его основе супергероя',
    author: 'Эрвин Кляйн',
    date: '18:43 13.03.2021',
    link: 'https://panorama.pub/news/marvel-vykupila-prava-na-cheburashku-i-sozdast-na-ego-osnove-supergeroya'
  },
  {
    title: 'Госдума приняла закон о запрете дарения носков на 23 февраля',
    author: 'Виталий Манн',
    date: '08:50 14.03.2021',
    link: 'https://panorama.pub/news/gosduma-prinyala-zakon-o-zaprete-dareniya-noskov-na-23-fevralya'
  },
  {
    title: 'Учёные пришли к выводу, что Санта Клаус был моноголом',
    author: 'Анастасия Петрик',
    date: '22:09 30.12.2020',
    link: 'https://panorama.pub/news/p53744'
  }
];

const sourceExample_2 = [
  {
    title: 'Губернатор Нижегородской области запретил блины с начинкой',
    author: 'Глеб Никитин',
    date: '12:00 11.03.2020',
    link: 'http://breakingmad.me/ru/11292'
  },
  {
    title: 'На Алтае неочищенная от снега улица помогла предотвратить угон',
    author: 'Осип Родский',
    date: '14:43 10.03.2020',
    link: 'http://breakingmad.me/ru/11290'
  },
  {
    title: 'В Киевском университете торжественно открыли женский туалет',
    author: 'Тарас Шевченко',
    date: '14:22 10.03.2020',
    link: 'http://breakingmad.me/ru/11289'
  },
  {
    title: 'В Красноярском крае свиристели снова наелись забродивших яблок и лежат пьяные на снегу',
    author: 'Николай Дроздов',
    date: '11:22 09.03.2020',
    link: 'http://breakingmad.me/ru/11286'
  },
  {
    title: 'В Новосибирске кондуктор выбросила горящее сиденье из движущегося троллейбуса',
    author: 'Александр Локоть',
    date: '15:04 01.03.2020',
    link: 'http://breakingmad.me/ru/11280'
  },
  {
    title: 'В Дагестане отменили турнир по дзюдо из-за драки спортсменов со зрителями',
    author: 'Хабиб Нурмагомедов',
    date: '09:03 28.02.2021',
    link: 'http://breakingmad.me/ru/11278'
  },
  {
    title: 'В Берлине мужчина выдавал себя за диспетчера и отдавал полицейским вертолётам приказы',
    author: 'Ангела Меркель',
    date: '03:04 28.02.2021',
    link: 'http://breakingmad.me/ru/11277'
  },
  {
    title: 'В Самаре подорожали бесплатные похороны',
    author: 'Джордж Ромеро',
    date: '01:04 26.02.2021',
    link: 'http://breakingmad.me/ru/11275'
  },
  {
    title: 'В Никарагуа создали министерство Внеземных космических дел',
    author: 'Даниэль Ортега',
    date: '02:43 22.02.2021',
    link: 'http://breakingmad.me/ru/11269'
  },
  {
    title: 'Panasonic представила робота-кошку, которая может игнорировать хозяина и пукать',
    author: 'Илон Маск',
    date: '15:20 19.02.2021',
    link: 'http://breakingmad.me/ru/11264'
  }
];

// * Класс и экземпляр API для запросов к серверу

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
      },
      mode: 'no-cors'
    })
      .then(res => this._checkResponseData(res));
  }
}

const api = new Api({
  baseUrl: 'http://newsapi.org/v2/top-headlines?country=ru',
  key: 'dfeecfd7437942a09109d3f8d4e7083c'
});

// * Класс виджета

class Widget {
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

// * Класс новости

class Article {
  constructor (data, statusChangeHandler) {
    this._title = data.title;
    this._author = data.author;
    this._date = data.date;
    this._link = data.link;
    this.isRead = false;

    this._reportStatusChange = statusChangeHandler;

    this._changeStatus = this._changeStatus.bind(this);
  }

  _changeStatus () { // Изменить статус новости
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

  createElement () { // Создать элемент новости
    this._element = document.createElement('article');
    this._element.classList.add('widget__article', 'article');

    this._titleElement = document.createElement('h2');
    this._titleElement.classList.add('article__title');
    this._titleElement.textContent = this._title;
    this._element.append(this._titleElement);

    this._buttonElement = document.createElement('button');
    this._buttonElement.classList.add('article__status');
    this._buttonElement.addEventListener('click', this._changeStatus);
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

  deleteElement () { // Удалить элемент новости
    this._element.remove();
    this._element = null;
  }
}

// * Добавить виджет на страницу

const targetElement = document.querySelector('aside');

const widget = new Widget(targetElement);

widget.add();

// * Добавить управление виджетом на страницу

const parent = document.querySelector('body');
const sibling = document.querySelector('aside');

const buttonOne = document.createElement('button');
buttonOne.textContent = 'Локальный источник';
buttonOne.addEventListener('click', () => {
  loadLocalNews(sourceExample);
});

const buttonTwo = document.createElement('button');
buttonTwo.textContent = 'Локальный источник [2]';
buttonTwo.addEventListener('click', () => {
  loadLocalNews(sourceExample_2);
});

const buttonThree = document.createElement('button');
buttonThree.textContent = 'Удалённый источник',
buttonThree.addEventListener('click', () => {
  loadRemoteNews();
});

const buttons = [buttonOne, buttonTwo, buttonThree];

buttons.forEach(button => {
  button.classList.add('button');
  parent.insertBefore(button, sibling)
});

// * Получение новостей

function loadLocalNews (source) { // Получение новостей из локального источника
  widget.clear();

  source.forEach(item => {
    const article = new Article(
      item,
      () => widget.refreshCounter()
    );
    const articleElement = article.createElement();
    widget.insert(article, articleElement);
  });

  widget.refreshCounter();
}

function loadRemoteNews () { // Получение новостей из удалённого источника
  widget.clear();

  api.getNews()
    .then(res => {
      const articles = res.articles;

      const processedArticles = articles.map(article => {
        const processedArticle = {};

        processedArticle.title = article.title;
        processedArticle.author = article.source.name;
        processedArticle.date = article.publishedAt;
        processedArticle.link = article.url;

        return processedArticle;
      });

      return processedArticles;
    })
    .then(processedArticles => {
      processedArticles.forEach(item => {
        const article = new Article(
          item,
          () => widget.refreshCounter()
        );
        const articleElement = article.createElement();
        widget.insert(article, articleElement);
      })

      widget.refreshCounter();
    })
    .catch(err => console.log(err));
}

loadLocalNews(sourceExample); // Получаем новости по умолчанию при загрузке страницы