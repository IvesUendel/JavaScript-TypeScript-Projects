const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

function verificaTextoNoInput() {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
}

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar");
  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
}

inputTarefa.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    verificaTextoNoInput();
  }
});

btnTarefa.addEventListener("click", function (event) {
  verificaTextoNoInput();
});
