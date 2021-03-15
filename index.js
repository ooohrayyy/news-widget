import Widget from './components/Widget.js';
import Article from './components/Article.js';
import { sourceExample } from './resources/sourceExample.js';

const targetElement = document.querySelector('aside');
const widget = new Widget(targetElement);
widget.add();

const widgetContainer = document.querySelector('.widget__container');

sourceExample.forEach(item => {
  const article = new Article(widgetContainer, item);
  article.add();
});