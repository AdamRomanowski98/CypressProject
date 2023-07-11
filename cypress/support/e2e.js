
import './commands'
import '@shelex/cypress-allure-plugin';

const app = window.top ?? window;
const style = app.document.head.querySelector('[data-hide-command-log-request]');
if (!style) {
  const style = app.document.createElement('style');
  style.innerHTML = '.command-name-request {display: none}';
  style.setAttribute('data-hide-command-log-request', '');
  app.document.head.appendChild(style);
}

