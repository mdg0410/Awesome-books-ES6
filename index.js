import Router from './modules/Router.js';

const routerLinks = document.querySelectorAll('[data-to]');

const router = new Router('list');

routerLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    router.navigate(link.dataset.to);
  });
});