const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criarLi() {
  const li = document.createElement('li');
  return li;
}

function criarTarefa(textoInput) {
  const li = criarLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  inputTarefa.value = '';
  inputTarefa.focus();
  criarBotaoApagar(li);
  salvarTarefas();
}

function criarBotaoApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar Tarefa';
  botaoApagar.setAttribute('class', 'apagar');
  li.appendChild(botaoApagar);
}

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar Tarefa', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionarTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criarTarefa(tarefa);
  }
}

btnTarefa.addEventListener('click', function () {
  if (!inputTarefa.value) return;
  criarTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
  }
});

document.addEventListener('click', function (e) {
  const elemento = e.target;

  if (elemento.classList.contains('apagar')) {
    elemento.parentElement.remove();
    salvarTarefas();
  }
});

adicionarTarefasSalvas();