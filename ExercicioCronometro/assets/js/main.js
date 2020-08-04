const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}

document.addEventListener('click', function (e) {
  const el = e.target;

  if (el.classList.contains('iniciar')) {
    relogio.classList.remove('pausado');
    relogio.classList.remove('zerado');
    relogio.classList.add('iniciado');
    clearInterval(timer);
    iniciaRelogio();
  }
  if (el.classList.contains('pausar')) {
    relogio.classList.remove('iniciado');
    relogio.classList.remove('zerado');
    relogio.classList.add('pausado');
    clearInterval(timer);
  }
  if (el.classList.contains('zerar')) {
    relogio.classList.remove('iniciado');
    relogio.classList.remove('pausado');
    relogio.classList.add('zerado');
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00'
  }
});

/**OUTRO METODO PARA REALIZAR O EXERCICIO */

// iniciar.addEventListener('click', function (event) {
//   relogio.classList.remove('pausado');
//   relogio.classList.remove('zerado');
//   relogio.classList.add('iniciado');
//   clearInterval(timer);
//   iniciaRelogio();
// });

// pausar.addEventListener('click', function (event) {
//   relogio.classList.remove('iniciado');
//   relogio.classList.remove('zerado');
//   relogio.classList.add('pausado');
//   clearInterval(timer);
// });

// zerar.addEventListener('click', function (event) {
//   relogio.classList.remove('iniciado');
//   relogio.classList.remove('pausado');
//   relogio.classList.add('zerado');
//   clearInterval(timer);
//   segundos = 0;
//   relogio.innerHTML = '00:00:00'
// });