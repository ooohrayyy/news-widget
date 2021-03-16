import Widget from './components/Widget.js';
import Article from './components/Article.js';
import { sourceExample, sourceExample_2 } from './resources/sourceExample.js';
import { api } from './utils/Api.js';

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

parent.insertBefore(buttonOne, sibling);
parent.insertBefore(buttonTwo, sibling);
parent.insertBefore(buttonThree, sibling);

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

loadLocalNews(sourceExample);