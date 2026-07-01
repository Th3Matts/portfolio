const section = document.querySelector('section')
const p = document.querySelector('section p');
const pTwo = document.querySelector('section p + p')
const portuguese = document.querySelector('header button');
const english = document.querySelector('header button + button');

portuguese.addEventListener('click', () => {
  p.innerHTML = `Sou Matheus Silva, um <span>desenvolvedor web em formação</span>, 
  com experiência prévia em trabalhos com clientes na área de tecnologia.`;
  pTwo.innerHTML = `Atualmente em busca de <span>oportunidades de desenvolvedor web
  júnior/nível inicial</span>, aberto(a) a trabalho remoto.`;
})

english.addEventListener('click', () => {
  p.innerHTML = `I'm Matheus Silva, a <span>web developer in training</span> with a background in tech-adjacent client work.`;
  pTwo.innerHTML = `Currently seeking <span>junior/entry-level web developer opportunities</span>, open to remote work.`;
})