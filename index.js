import Widget from './components/Widget.js';
import Article from './components/Article.js';
import { sourceExample } from './resources/sourceExample.js';

const targetElement = document.querySelector('aside');

const widget = new Widget(targetElement);
widget.addWidget();

sourceExample.forEach(item => {
  const article = new Article(
    item,
    () => widget.refreshUnreadCounter()
  );
  const articleElement = article.createElement();
  widget.insertArticle(article, articleElement);
});

widget.refreshUnreadCounter();