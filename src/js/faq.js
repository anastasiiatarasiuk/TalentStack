import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import icon from '../img/icons.svg';

// Fetch SVG sprite and inject into the DOM
// async function loadSvgSprite(url) {
//   const response = await fetch(url);
//   const sprite = await response.text();
//   const div = document.createElement('div');
//   div.style.display = 'none';
//   div.innerHTML = sprite;
//   document.body.insertBefore(div, document.body.firstChild);
// }
// console.log(icon);
// loadSvgSprite('../img/icons.svg'); // Замініть на правильний шлях до вашого спрайту

// Ініціалізуємо акордеон після завантаження спрайту
new Accordion('.accordion-container', {
  duration: 300,
  showMultiple: false,
  openOnInit: [0],
  elementClass: 'ac',
  triggerClass: 'ac-trigger',
  panelClass: 'ac-panel',
  activeClass: 'is-active',
  onOpen: function (currentElement) {
    currentElement
      .querySelector('.faq-icon use')
      .setAttribute('href', `${icon}#icon-Vector-up`);
  },
  onClose: function (currentElement) {
    currentElement
      .querySelector('.faq-icon use')
      .setAttribute('href', `${icon}#icon-Vector-down`);
  },
});
