import Widget from './components/Widget.js';
import Article from './components/Article.js';
import { sourceExample } from './resources/sourceExample.js';

const targetElement = document.querySelector('aside');

const widget = new Widget(targetElement);
widget.add();

sourceExample.forEach(item => {
  const article = new Article(
    item,
    () => widget.refreshUnreadCount()
  );
  const articleElement = article.createElement();
  widget.addArticle(article, articleElement);
});

widget.refreshUnreadCount();