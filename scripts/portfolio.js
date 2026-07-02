const section = document.querySelector('section')
const p = document.querySelector('section p');
const pTwo = document.querySelector('section p + p')

const langButtons = {
  pt: document.getElementById('lang-pt'),
  en: document.getElementById('lang-en')
}

const setLanguage = (lang) => {
  document.querySelectorAll('[data-' + lang + ']').forEach(elem => {
    elem.innerHTML = elem.dataset[lang];
  })
}

langButtons.pt.addEventListener('click', () => setLanguage('pt'));
langButtons.en.addEventListener('click', () => setLanguage('en'));