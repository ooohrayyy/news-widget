import Widget from './components/Widget.js';
import Article from './components/Article.js';

const targetElement = document.querySelector('aside');

const widget = new Widget(targetElement);

widget.add();