import Widget from './components/Widget.js';
import Article from './components/Article.js';
import { sourceExample, sourceExample_2 } from './resources/sourceExample.js';
import { api } from './utils/Api.js';

// * Добавить виджет на страницу

const targetElement = document.querySelector('aside');

const widget = new Widget(targetElement);
widget.addWidget();

// * Получение новостей

function loadLocalNews (source) { // Получение новостей из локального источника
  widget.clear();

  source.forEach(item => {
    const article = new Article(
      item,
      () => widget.refreshUnreadCounter()
    );
    const articleElement = article.createElement();
    widget.insertArticle(article, articleElement);
  });

  widget.refreshUnreadCounter();
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
          () => widget.refreshUnreadCounter()
        );
        const articleElement = article.createElement();
        widget.insertArticle(article, articleElement);
      })

      widget.refreshUnreadCounter();
    })
    .catch(err => console.log(err));
}

loadLocalNews(sourceExample);