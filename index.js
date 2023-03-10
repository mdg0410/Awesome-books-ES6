import { DateTime } from './modules/luxon.js';
import display from './modules/display.js';
import Router from './modules/Router.js';

const todayContainer = document.getElementById('today');
const routerLinks = document.querySelectorAll('[data-to]');

todayContainer.textContent = DateTime.now().toFormat('DDD, tt');

display.render();

const router = new Router('list');

routerLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    router.navigate(link.dataset.to);
  });
});